"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports[Symbol.toStringTag] = "Module";
var vue = require("vue");
var serverRenderer = require("vue/server-renderer");
var vueRouter = require("vue-router");
var serverRenderer$1 = require("@vue/server-renderer");
var pinia = require("pinia");
var elementPlus = require("element-plus");
var lib = require("element-plus/lib");
var Axios = require("axios");
function _interopDefaultLegacy(e) {
  return e && typeof e === "object" && "default" in e ? e : { "default": e };
}
var Axios__default = /* @__PURE__ */ _interopDefaultLegacy(Axios);
var _imports_0 = "/assets/logo.03d6d6da.png";
var app_vue_vue_type_style_index_0_scoped_true_lang = "";
var _export_sfc = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
};
const _sfc_main$1 = vue.defineComponent({
  name: "App",
  data() {
    return {
      time: ""
    };
  },
  mounted() {
    window.setInterval(() => {
      this.time = new Date().toLocaleString();
    }, 1e3);
  }
});
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_router_link = vue.resolveComponent("router-link");
  const _component_router_view = vue.resolveComponent("router-view");
  _push(`<!--[--><div class="logo" data-v-2ae6c14f><img alt="Vue logo"${serverRenderer.ssrRenderAttr("src", _imports_0)} data-v-2ae6c14f><h3 data-v-2ae6c14f>Vue3.0.0.0.0011 Typescript Eslint SSR Starter</h3><p class="c-#DB752D" data-v-2ae6c14f>${serverRenderer.ssrInterpolate(_ctx.time)}</p></div><nav data-v-2ae6c14f>`);
  _push(serverRenderer.ssrRenderComponent(_component_router_link, { to: { name: "index" } }, {
    default: vue.withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Go to Home`);
      } else {
        return [
          vue.createTextVNode("Go to Home")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(serverRenderer.ssrRenderComponent(_component_router_link, { to: { name: "user" } }, {
    default: vue.withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Go to User`);
      } else {
        return [
          vue.createTextVNode("Go to User")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(serverRenderer.ssrRenderComponent(_component_router_link, { to: { name: "market" } }, {
    default: vue.withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Go to Market`);
      } else {
        return [
          vue.createTextVNode("Go to Market")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</nav><hr data-v-2ae6c14f><div class="container pt-12px pb-12px" data-v-2ae6c14f>`);
  _push(serverRenderer.ssrRenderComponent(_component_router_view, null, {
    default: vue.withCtx(({ Component }, _push2, _parent2, _scopeId) => {
      if (_push2) {
        serverRenderer.ssrRenderSuspense(_push2, {
          default: () => {
            serverRenderer.ssrRenderVNode(_push2, vue.createVNode(vue.resolveDynamicComponent(Component), null, null), _parent2, _scopeId);
          },
          _: 2
        });
      } else {
        return [
          (vue.openBlock(), vue.createBlock(vue.Suspense, null, {
            default: vue.withCtx(() => [
              (vue.openBlock(), vue.createBlock(vue.resolveDynamicComponent(Component)))
            ]),
            _: 2
          }, 1024))
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div><!--]-->`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/app.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
var App = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1], ["__scopeId", "data-v-2ae6c14f"]]);
const isPromise = (obj) => !!obj && (typeof obj === "object" || typeof obj === "function") && typeof obj.then === "function";
function createRouter() {
  const routerHistory = vueRouter.createMemoryHistory();
  return vueRouter.createRouter({
    history: routerHistory,
    routes: [
      {
        path: "/",
        name: "index",
        component: () => Promise.resolve().then(function() {
          return index$1;
        })
      },
      {
        path: "/user",
        name: "user",
        component: () => Promise.resolve().then(function() {
          return user$1;
        })
      },
      {
        path: "/market",
        name: "market",
        component: () => Promise.resolve().then(function() {
          return market;
        })
      }
    ]
  });
}
function renderPreloadLinks(modules, manifest) {
  let links = "";
  const seen = /* @__PURE__ */ new Set();
  modules.forEach((id) => {
    const files = manifest[id];
    if (files) {
      files.forEach((file) => {
        if (!seen.has(file)) {
          seen.add(file);
          links += renderPreloadLink(file);
        }
      });
    }
  });
  return links;
}
function renderPreloadLink(file) {
  if (file.endsWith(".js")) {
    return `<link rel="modulepreload" crossorigin href="${file}">`;
  } else if (file.endsWith(".css")) {
    return `<link rel="stylesheet" href="${file}">`;
  } else {
    return "";
  }
}
async function render(url, manifest) {
  const router = createRouter();
  const store = pinia.createPinia();
  const app = vue.createSSRApp(App);
  app.use(router).use(store);
  router.push(url);
  try {
    await router.isReady();
    const to = router.currentRoute;
    const matchedRoute = to.value.matched;
    if (to.value.matched.length === 0) {
      return "";
    }
    const matchedComponents = [];
    matchedRoute.map((route) => {
      matchedComponents.push(...Object.values(route.components));
    });
    const asyncDataFuncs = matchedComponents.map((component) => {
      const asyncData = component.asyncData || null;
      if (asyncData) {
        const config = {
          store: store.value,
          route: to
        };
        if (isPromise(asyncData) === false) {
          const result = asyncData(config);
          return Promise.resolve(result);
        }
        return asyncData(config);
      }
    });
    await Promise.all(asyncDataFuncs);
    const ctx = {};
    const html = await serverRenderer$1.renderToString(app, ctx);
    const preloadLinks = renderPreloadLinks(ctx.modules, manifest);
    const state = JSON.stringify(store.state.value);
    return [html, state, preloadLinks];
  } catch (error) {
    console.log(error);
  }
}
var elSwitch = "";
function ssrRegisterHelper(comp, filename) {
  const setup = comp.setup;
  comp.setup = (props, ctx) => {
    const ssrContext = vue.useSSRContext();
    (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add(filename);
    if (setup) {
      return setup(props, ctx);
    }
  };
}
const __default__$1 = vue.defineComponent({
  name: "Index",
  setup() {
    const isActive = vue.ref(false);
    return () => vue.createVNode("div", {
      "class": "index"
    }, [vue.createVNode(elementPlus.ElSwitch, {
      "modelValue": isActive.value,
      "onUpdate:modelValue": ($event) => isActive.value = $event,
      "active-color": "#13ce66",
      "inactive-color": "#ff4949"
    }, {
      default: () => [vue.createTextVNode("switch")]
    })]);
  }
});
const __moduleId$1 = "src/views/index.tsx";
ssrRegisterHelper(__default__$1, __moduleId$1);
var index$1 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  "default": __default__$1
});
var elButton = "";
var elInput = "";
var elFormItem = "";
var elForm = "";
var elCard = "";
const useUser = pinia.defineStore("user", {
  state() {
    return {
      userInfo: {
        name: "",
        userId: "",
        token: ""
      }
    };
  },
  actions: {
    updateUser(info) {
      this.userInfo = info;
    },
    updateToken(token) {
      this.userInfo.token = token;
    }
  }
});
var user_vue_vue_type_style_index_0_lang = "";
const _sfc_main = vue.defineComponent({
  name: "User",
  components: {
    ElCard: elementPlus.ElCard,
    ElForm: elementPlus.ElForm,
    ElButton: elementPlus.ElButton,
    ElFormItem: elementPlus.ElFormItem,
    ElInput: elementPlus.ElInput
  },
  setup() {
    const params = vue.reactive({
      userName: "",
      password: ""
    });
    const userStore = useUser();
    const loading = vue.ref(false);
    const isLogin = vue.computed(() => !!userStore.userInfo.token);
    const userInfo = vue.computed(() => userStore.userInfo);
    const submitHandle = () => {
      const { userName, password } = params;
      if (!userName) {
        elementPlus.ElNotification({
          type: "error",
          title: "Error",
          message: "Username is required"
        });
        return;
      }
      if (!password) {
        elementPlus.ElNotification({
          type: "error",
          title: "Error",
          message: "Password is required"
        });
        return;
      }
      loading.value = true;
      window.setTimeout(() => {
        userStore.updateUser({
          name: userName,
          userId: "1",
          token: Math.random().toString(36).slice(-8)
        });
        loading.value = false;
      }, 1500);
    };
    return { params, loading, submitHandle, userInfo, isLogin };
  }
});
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_el_card = lib.ElCard;
  const _component_el_form = lib.ElForm;
  const _component_el_form_item = lib.ElFormItem;
  const _component_el_input = lib.ElInput;
  const _component_el_button = lib.ElButton;
  _push(`<div${serverRenderer.ssrRenderAttrs(vue.mergeProps({ class: "user" }, _attrs))}><h3 class="mb-8px">User Page</h3>`);
  if (_ctx.isLogin) {
    _push(`<div class="info">`);
    _push(serverRenderer.ssrRenderComponent(_component_el_card, { class: "box-card" }, {
      default: vue.withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(`<div class="mb-12px c-red"${_scopeId}>User logged in</div><div${_scopeId}>UserName: <span class="c-#00f"${_scopeId}>${serverRenderer.ssrInterpolate(_ctx.userInfo.name)}</span></div>`);
        } else {
          return [
            vue.createVNode("div", { class: "mb-12px c-red" }, "User logged in"),
            vue.createVNode("div", null, [
              vue.createTextVNode("UserName: "),
              vue.createVNode("span", { class: "c-#00f" }, vue.toDisplayString(_ctx.userInfo.name), 1)
            ])
          ];
        }
      }),
      _: 1
    }, _parent));
    _push(`</div>`);
  } else {
    _push(serverRenderer.ssrRenderComponent(_component_el_form, {
      "label-position": "top",
      class: "form"
    }, {
      default: vue.withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(serverRenderer.ssrRenderComponent(_component_el_form_item, { label: "UserName" }, {
            default: vue.withCtx((_2, _push3, _parent3, _scopeId2) => {
              if (_push3) {
                _push3(serverRenderer.ssrRenderComponent(_component_el_input, {
                  modelValue: _ctx.params.userName,
                  "onUpdate:modelValue": ($event) => _ctx.params.userName = $event
                }, null, _parent3, _scopeId2));
              } else {
                return [
                  vue.createVNode(_component_el_input, {
                    modelValue: _ctx.params.userName,
                    "onUpdate:modelValue": ($event) => _ctx.params.userName = $event
                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                ];
              }
            }),
            _: 1
          }, _parent2, _scopeId));
          _push2(serverRenderer.ssrRenderComponent(_component_el_form_item, { label: "Password" }, {
            default: vue.withCtx((_2, _push3, _parent3, _scopeId2) => {
              if (_push3) {
                _push3(serverRenderer.ssrRenderComponent(_component_el_input, {
                  modelValue: _ctx.params.password,
                  "onUpdate:modelValue": ($event) => _ctx.params.password = $event,
                  type: "password"
                }, null, _parent3, _scopeId2));
              } else {
                return [
                  vue.createVNode(_component_el_input, {
                    modelValue: _ctx.params.password,
                    "onUpdate:modelValue": ($event) => _ctx.params.password = $event,
                    type: "password"
                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                ];
              }
            }),
            _: 1
          }, _parent2, _scopeId));
          _push2(serverRenderer.ssrRenderComponent(_component_el_form_item, null, {
            default: vue.withCtx((_2, _push3, _parent3, _scopeId2) => {
              if (_push3) {
                _push3(serverRenderer.ssrRenderComponent(_component_el_button, {
                  loading: _ctx.loading,
                  type: "success"
                }, {
                  default: vue.withCtx((_3, _push4, _parent4, _scopeId3) => {
                    if (_push4) {
                      _push4(` Submit `);
                    } else {
                      return [
                        vue.createTextVNode(" Submit ")
                      ];
                    }
                  }),
                  _: 1
                }, _parent3, _scopeId2));
              } else {
                return [
                  vue.createVNode(_component_el_button, {
                    loading: _ctx.loading,
                    type: "success",
                    onClick: _ctx.submitHandle
                  }, {
                    default: vue.withCtx(() => [
                      vue.createTextVNode(" Submit ")
                    ]),
                    _: 1
                  }, 8, ["loading", "onClick"])
                ];
              }
            }),
            _: 1
          }, _parent2, _scopeId));
        } else {
          return [
            vue.createVNode(_component_el_form_item, { label: "UserName" }, {
              default: vue.withCtx(() => [
                vue.createVNode(_component_el_input, {
                  modelValue: _ctx.params.userName,
                  "onUpdate:modelValue": ($event) => _ctx.params.userName = $event
                }, null, 8, ["modelValue", "onUpdate:modelValue"])
              ]),
              _: 1
            }),
            vue.createVNode(_component_el_form_item, { label: "Password" }, {
              default: vue.withCtx(() => [
                vue.createVNode(_component_el_input, {
                  modelValue: _ctx.params.password,
                  "onUpdate:modelValue": ($event) => _ctx.params.password = $event,
                  type: "password"
                }, null, 8, ["modelValue", "onUpdate:modelValue"])
              ]),
              _: 1
            }),
            vue.createVNode(_component_el_form_item, null, {
              default: vue.withCtx(() => [
                vue.createVNode(_component_el_button, {
                  loading: _ctx.loading,
                  type: "success",
                  onClick: _ctx.submitHandle
                }, {
                  default: vue.withCtx(() => [
                    vue.createTextVNode(" Submit ")
                  ]),
                  _: 1
                }, 8, ["loading", "onClick"])
              ]),
              _: 1
            })
          ];
        }
      }),
      _: 1
    }, _parent));
  }
  _push(`</div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/views/user.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
var user = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
var user$1 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  "default": user
});
var index = "";
const getFruitList = async () => {
  const { data } = await Axios__default["default"].get("/justTest/getFruitList");
  if (data.code === 0) {
    return data.data;
  }
  return [];
};
const useMarket = pinia.defineStore("market", {
  state() {
    return {
      fruitList: []
    };
  },
  actions: {
    async getList() {
      try {
        const data = await getFruitList();
        this.fruitList = data;
      } catch (error) {
        console.log(error);
      }
    }
  }
});
const __default__ = vue.defineComponent({
  name: "Markets",
  async setup() {
    const marketStore = useMarket();
    await marketStore.getList();
    const {
      fruitList
    } = marketStore;
    return {
      fruitList
    };
  },
  render() {
    return vue.createVNode("div", null, [vue.createVNode("h3", null, [vue.createTextVNode("FruitList")]), vue.createVNode("table", {
      "class": "table"
    }, [vue.createVNode("thead", null, [vue.createVNode("tr", null, [vue.createVNode("th", {
      "class": "c-#67c23a"
    }, [vue.createTextVNode("ID")]), vue.createVNode("th", {
      "class": "c-#e6a23c"
    }, [vue.createTextVNode("Name")]), vue.createVNode("th", {
      "class": "c-#79bbff"
    }, [vue.createTextVNode("Price")])])]), vue.createVNode("tbody", null, [this.fruitList.map((item) => {
      return vue.createVNode("tr", {
        "key": item.id
      }, [vue.createVNode("td", {
        "class": "c-#67c23a"
      }, [item.id]), vue.createVNode("td", {
        "class": "c-#e6a23c"
      }, [item.name]), vue.createVNode("td", {
        "class": "c-#79bbff"
      }, [vue.createTextVNode("$"), item.price])]);
    })])])]);
  }
});
const __moduleId = "src/views/market.tsx";
ssrRegisterHelper(__default__, __moduleId);
var market = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  "default": __default__
});
exports.render = render;
