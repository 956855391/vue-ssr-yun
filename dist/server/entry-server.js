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
var _imports_0 = "/assets/hat.06c1d9a8.svg";
var _imports_1 = "/assets/ballon2.2e103171.svg";
var _imports_2 = "/assets/ballon1.a97e8083.svg";
var _imports_3 = "/assets/ballon3.34ab1f95.svg";
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
    this.fetchData();
  },
  methods: {
    fetchData() {
      console.log("textData");
      let textData = {
        "greeting": "Hiya",
        "name": "Lubao",
        "greetingText": "I really like your name btw!",
        "wishText": "May the js.prototypes always be with you! ;)",
        "imagePath": "img/lydia2.png",
        "text1": "It's your birthday!!! :D",
        "textInChatBox": "Happy birthday to you!! Yeee! Many many happy blah...",
        "sendButtonLabel": "Send",
        "text2": "That's what I was going to do.",
        "text3": "But then I stopped.",
        "text4": "I realised, I wanted to do something",
        "text4Adjective": "special",
        "text5Entry": "Because,",
        "text5Content": "You are Special",
        "smiley": ":)",
        "bigTextPart1": "S",
        "bigTextPart2": "O",
        "wishHeading": "Happy Birthday!",
        "outroText": "Okay, now come back and tell me if you liked it.",
        "replayText": "Or click, if you want to watch it again.",
        "outroSmiley": ":)"
      };
      let data = textData;
      let dataArr = Object.keys(data);
      dataArr = Object.keys(data);
      console.log("data:", dataArr);
      dataArr.map((customData) => {
        if (data[customData] !== "") {
          if (customData === "imagePath") {
            let bodyDom = document.querySelector(`[data-node-name*="${customData}"]`);
            if (bodyDom) {
              bodyDom.setAttribute("src", data[customData]);
            }
          } else {
            let bodyDom = document.querySelector(`[data-node-name*="${customData}"]`);
            if (bodyDom) {
              bodyDom.innerText = data[customData];
            }
          }
        }
        if (dataArr.length === dataArr.indexOf(customData) + 1) {
          this.animationTimeline();
        }
      });
    },
    animationTimeline() {
      if (!window.TimelineMax) {
        return;
      }
      const textBoxChars = document.getElementsByClassName("hbd-chatbox")[0];
      const hbd = document.getElementsByClassName("wish-hbd")[0];
      textBoxChars.innerHTML = `<span>${textBoxChars.innerHTML.split("").join("</span><span>")}</span`;
      hbd.innerHTML = `<span>${hbd.innerHTML.split("").join("</span><span>")}</span`;
      const ideaTextTrans = {
        opacity: 0,
        y: -20,
        rotationX: 5,
        skewX: "15deg"
      };
      const ideaTextTransLeave = {
        opacity: 0,
        y: 20,
        rotationY: 5,
        skewX: "-15deg"
      };
      const tl = new window.TimelineMax();
      tl.to(".container", 0.1, {
        visibility: "visible"
      }).from(".one", 0.7, {
        opacity: 0,
        y: 10
      }).from(".two", 0.4, {
        opacity: 0,
        y: 10
      }).to(".one", 0.7, {
        opacity: 0,
        y: 10
      }, "+=2.5").to(".two", 0.7, {
        opacity: 0,
        y: 10
      }, "-=1").from(".three", 0.7, {
        opacity: 0,
        y: 10
      }).to(".three", 0.7, {
        opacity: 0,
        y: 10
      }, "+=2").from(".four", 0.7, {
        scale: 0.2,
        opacity: 0
      }).from(".fake-btn", 0.3, {
        scale: 0.2,
        opacity: 0
      }).staggerTo(".hbd-chatbox span", 0.5, {
        visibility: "visible"
      }, 0.05).to(".fake-btn", 0.1, {
        backgroundColor: "rgb(127, 206, 248)"
      }).to(".four", 0.5, {
        scale: 0.2,
        opacity: 0,
        y: -150
      }, "+=0.7").from(".idea-1", 0.7, ideaTextTrans).to(".idea-1", 0.7, ideaTextTransLeave, "+=1.5").from(".idea-2", 0.7, ideaTextTrans).to(".idea-2", 0.7, ideaTextTransLeave, "+=1.5").from(".idea-3", 0.7, ideaTextTrans).to(".idea-3 strong", 0.5, {
        scale: 1.2,
        x: 10,
        backgroundColor: "rgb(21, 161, 237)",
        color: "#fff"
      }).to(".idea-3", 0.7, ideaTextTransLeave, "+=1.5").from(".idea-4", 0.7, ideaTextTrans).to(".idea-4", 0.7, ideaTextTransLeave, "+=1.5").from(".idea-5", 0.7, {
        rotationX: 15,
        rotationZ: -10,
        skewY: "-5deg",
        y: 50,
        z: 10,
        opacity: 0
      }, "+=0.5").to(".idea-5 .smiley", 0.7, {
        rotation: 90,
        x: 8
      }, "+=0.4").to(".idea-5", 0.7, {
        scale: 0.2,
        opacity: 0
      }, "+=2").staggerFrom(".idea-6 span", 0.8, {
        scale: 3,
        opacity: 0,
        rotation: 15,
        ease: window.Expo.easeOut
      }, 0.2).staggerTo(".idea-6 span", 0.8, {
        scale: 3,
        opacity: 0,
        rotation: -15,
        ease: window.Expo.easeOut
      }, 0.2, "+=1").staggerFromTo(".baloons img", 2.5, {
        opacity: 0.9,
        y: 1400
      }, {
        opacity: 1,
        y: -1e3
      }, 0.2).from(".lydia-dp", 0.5, {
        scale: 3.5,
        opacity: 0,
        x: 25,
        y: -25,
        rotationZ: -45
      }, "-=2").from(".hat", 0.5, {
        x: -100,
        y: 350,
        rotation: -180,
        opacity: 0
      }).staggerFrom(".wish-hbd span", 0.7, {
        opacity: 0,
        y: -50,
        rotation: 150,
        skewX: "30deg",
        ease: window.Elastic.easeOut.config(1, 0.5)
      }, 0.1).staggerFromTo(".wish-hbd span", 0.7, {
        scale: 1.4,
        rotationY: 150
      }, {
        scale: 1,
        rotationY: 0,
        color: "#ff69b4",
        ease: window.Expo.easeOut
      }, 0.1, "party").from(".wish h5", 0.5, {
        opacity: 0,
        y: 10,
        skewX: "-15deg"
      }, "party").staggerTo(".eight svg", 1.5, {
        visibility: "visible",
        opacity: 0,
        scale: 80,
        repeat: 3,
        repeatDelay: 1.4
      }, 0.3).to(".six", 0.5, {
        opacity: 0,
        y: 30,
        zIndex: "-1"
      }).staggerFrom(".nine p", 1, ideaTextTrans, 1.2).to(".last-smile", 0.5, {
        rotation: 90
      }, "+=1");
      const replyBtn = document.getElementById("replay");
      replyBtn.addEventListener("click", () => {
        tl.restart();
      });
    }
  }
});
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${serverRenderer.ssrRenderAttrs(vue.mergeProps({ class: "container" }, _attrs))} data-v-0cd89ca0><div class="one" data-v-0cd89ca0><h1 class="one" data-v-0cd89ca0><span data-node-name="greeting" data-v-0cd89ca0>Hey</span><span data-node-name="name" data-v-0cd89ca0>Lydia</span></h1><p class="two" data-node-name="greetingText" data-v-0cd89ca0>I really like your name btw!</p></div><div class="three" data-v-0cd89ca0><p data-node-name="text1" data-v-0cd89ca0>It&#39;s your birthday!!! :D</p></div><div class="four" data-v-0cd89ca0><div class="text-box" data-v-0cd89ca0><p class="hbd-chatbox" data-node-name="textInChatBox" data-v-0cd89ca0>Happy birthday to you!! Yeee! Many many happy blah...</p><p class="fake-btn" data-node-name="sendButtonLabel" data-v-0cd89ca0>Send</p></div></div><div class="five" data-v-0cd89ca0><p class="idea-1" data-node-name="text2" data-v-0cd89ca0>That&#39;s what I was going to do.</p><p class="idea-2" data-node-name="text3" data-v-0cd89ca0>But then I stopped.</p><p class="idea-3" data-v-0cd89ca0><span data-node-name="text4" data-v-0cd89ca0>I realised, I wanted to do something</span><strong data-node-name="text4Adjective" data-v-0cd89ca0>special</strong>.</p><p class="idea-4" data-node-name="text5Entry" data-v-0cd89ca0>Because,</p><p class="idea-5" data-v-0cd89ca0><span data-node-name="text5Content" data-v-0cd89ca0>You are Special</span><span class="smiley" data-node-name="smiley" data-v-0cd89ca0>:)</span></p><p class="idea-6" data-v-0cd89ca0><span data-node-name="bigTextPart1" data-v-0cd89ca0>S</span><span data-node-name="bigTextPart2" data-v-0cd89ca0>O</span></p></div><div class="six" data-v-0cd89ca0><img alt="" class="hat"${serverRenderer.ssrRenderAttr("src", _imports_0)} data-v-0cd89ca0><div class="wish" data-v-0cd89ca0><h3 class="wish-hbd" data-node-name="wishHeading" data-v-0cd89ca0>Happy Birthday!</h3><h5 data-node-name="wishText" data-v-0cd89ca0>May the js.prototypes always be with you! ;)</h5></div></div><div class="seven" data-v-0cd89ca0><div class="baloons" data-v-0cd89ca0><img${serverRenderer.ssrRenderAttr("src", _imports_1)} alt="" data-v-0cd89ca0><img${serverRenderer.ssrRenderAttr("src", _imports_2)} alt="" data-v-0cd89ca0><img${serverRenderer.ssrRenderAttr("src", _imports_3)} alt="" data-v-0cd89ca0><img${serverRenderer.ssrRenderAttr("src", _imports_2)} alt="" data-v-0cd89ca0><img${serverRenderer.ssrRenderAttr("src", _imports_1)} alt="" data-v-0cd89ca0><img${serverRenderer.ssrRenderAttr("src", _imports_3)} alt="" data-v-0cd89ca0><img${serverRenderer.ssrRenderAttr("src", _imports_1)} alt="" data-v-0cd89ca0><img${serverRenderer.ssrRenderAttr("src", _imports_3)} alt="" data-v-0cd89ca0><img${serverRenderer.ssrRenderAttr("src", _imports_2)} alt="" data-v-0cd89ca0><img${serverRenderer.ssrRenderAttr("src", _imports_1)} alt="" data-v-0cd89ca0><img${serverRenderer.ssrRenderAttr("src", _imports_3)} alt="" data-v-0cd89ca0><img${serverRenderer.ssrRenderAttr("src", _imports_1)} alt="" data-v-0cd89ca0><img${serverRenderer.ssrRenderAttr("src", _imports_2)} alt="" data-v-0cd89ca0><img${serverRenderer.ssrRenderAttr("src", _imports_3)} alt="" data-v-0cd89ca0><img${serverRenderer.ssrRenderAttr("src", _imports_1)} alt="" data-v-0cd89ca0><img${serverRenderer.ssrRenderAttr("src", _imports_3)} alt="" data-v-0cd89ca0><img${serverRenderer.ssrRenderAttr("src", _imports_2)} alt="" data-v-0cd89ca0><img${serverRenderer.ssrRenderAttr("src", _imports_1)} alt="" data-v-0cd89ca0><img${serverRenderer.ssrRenderAttr("src", _imports_2)} alt="" data-v-0cd89ca0><img${serverRenderer.ssrRenderAttr("src", _imports_3)} alt="" data-v-0cd89ca0><img${serverRenderer.ssrRenderAttr("src", _imports_3)} alt="" data-v-0cd89ca0><img${serverRenderer.ssrRenderAttr("src", _imports_2)} alt="" data-v-0cd89ca0><img${serverRenderer.ssrRenderAttr("src", _imports_1)} alt="" data-v-0cd89ca0><img${serverRenderer.ssrRenderAttr("src", _imports_3)} alt="" data-v-0cd89ca0><img${serverRenderer.ssrRenderAttr("src", _imports_1)} alt="" data-v-0cd89ca0><img${serverRenderer.ssrRenderAttr("src", _imports_2)} alt="" data-v-0cd89ca0><img${serverRenderer.ssrRenderAttr("src", _imports_3)} alt="" data-v-0cd89ca0><img${serverRenderer.ssrRenderAttr("src", _imports_1)} alt="" data-v-0cd89ca0><img${serverRenderer.ssrRenderAttr("src", _imports_3)} alt="" data-v-0cd89ca0><img${serverRenderer.ssrRenderAttr("src", _imports_2)} alt="" data-v-0cd89ca0><img${serverRenderer.ssrRenderAttr("src", _imports_1)} alt="" data-v-0cd89ca0><img${serverRenderer.ssrRenderAttr("src", _imports_2)} alt="" data-v-0cd89ca0><img${serverRenderer.ssrRenderAttr("src", _imports_3)} alt="" data-v-0cd89ca0></div></div><div class="eight" data-v-0cd89ca0><svg viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg" data-v-0cd89ca0><circle cx="20" cy="20" r="20" data-v-0cd89ca0></circle></svg><svg viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg" data-v-0cd89ca0><circle cx="20" cy="20" r="20" data-v-0cd89ca0></circle></svg><svg viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg" data-v-0cd89ca0><circle cx="20" cy="20" r="20" data-v-0cd89ca0></circle></svg><svg viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg" data-v-0cd89ca0><circle cx="20" cy="20" r="20" data-v-0cd89ca0></circle></svg><svg viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg" data-v-0cd89ca0><circle cx="20" cy="20" r="20" data-v-0cd89ca0></circle></svg><svg viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg" data-v-0cd89ca0><circle cx="20" cy="20" r="20" data-v-0cd89ca0></circle></svg><svg viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg" data-v-0cd89ca0><circle cx="20" cy="20" r="20" data-v-0cd89ca0></circle></svg><svg viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg" data-v-0cd89ca0><circle cx="20" cy="20" r="20" data-v-0cd89ca0></circle></svg><svg viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg" data-v-0cd89ca0><circle cx="20" cy="20" r="20" data-v-0cd89ca0></circle></svg></div><div class="nine" data-v-0cd89ca0><p data-node-name="outroText" data-v-0cd89ca0>Okay, now come back and tell me if you liked it.</p><p id="replay" data-node-name="replayText" data-v-0cd89ca0>Or click, if you want to watch it again.</p><p class="last-smile" data-node-name="outroSmiley" data-v-0cd89ca0>:)</p></div></div>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/app.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
var App = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1], ["__scopeId", "data-v-0cd89ca0"]]);
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
          store,
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
