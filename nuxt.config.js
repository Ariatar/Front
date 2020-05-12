require("dotenv").config();

export default {
    mode: "universal",
    server: {
        port: process.env.PORT ? process.env.PORT : 8000, // default: 3000
        host: process.env.HOST ? process.env.HOST : "0.0.0.0" // default: localhost
    },
    /*
     ** Headers of the page
     */
    head: {
        meta: [
            { charset: "utf-8" },
            {
                name: "viewport",
                content:
                    "width=device-width, initial-scale=1, maximum-scale=1, minimum-scale=1, user-scalable=no"
            },
            {
                name: "format-detection",
                content: "telephone=no"
            }
        ],
        link: [
            {
                rel: "stylesheet",
                href:
                    "https://fonts.googleapis.com/css?family=Roboto:300,400,500&display=swap&subset=cyrillic"
            },
            {
                rel: "apple-touch-icon",
                sizes: "180x180",
                href: "/apple-touch-icon.png"
            },
            {
                rel: "icon",
                type: "image/png",
                sizes: "32x32",
                href: "/favicon-32x32.png"
            },
            {
                rel: "icon",
                type: "image/png",
                sizes: "16x16",
                href: "/favicon-16x16.png"
            },
            { rel: "manifest", href: "/site.webmanifest" }
        ]
    },
    router: {
        middleware: ["pageAccount"]
    },
    /*
     ** Customize the progress-bar color
     */
    loading: { color: "#fff" },
    /*
     ** Global CSS
     */
    css: [{ src: "~/assets/scss/main.scss", lang: "scss" }],
    /*
     ** Plugins to load before mounting the App
     */
    plugins: [
        "~/plugins/axios",
        "~/plugins/base-components",
        "~/plugins/base-mixins",
        "~/plugins/vue-social-sharing",
        "~/plugins/click-outside",
        "~/plugins/vee-validate",
        "~/plugins/i18n",
        "~/plugins/decode-response",
        { src: "~/plugins/jquery.min.js", ssr: false }
    ],
    /*
     ** Nuxt.js dev-modules
     */
    buildModules: [["@nuxtjs/dotenv", { systemvars: true }], "@nuxtjs/moment"],
    /*
     ** Nuxt.js modules
     */
    modules: [
        // Doc: https://bootstrap-vue.js.org
        "bootstrap-vue/nuxt",
        // Doc: https://axios.nuxtjs.org/usage
        "@nuxtjs/axios",
        // Doc: https://github.com/nuxt-community/dotenv-module
        "@nuxtjs/dotenv",
        "nuxt-i18n",
        "@nuxtjs/style-resources",
        "vue-scrollto/nuxt",
        [
            "@nuxtjs/yandex-metrika",
            {
                id: "56753830",
                clickmap: true,
                trackLinks: true,
                accurateTrackBounce: true,
                webvisor: true
            }
        ],
        [
            "@nuxtjs/google-gtag",
            {
                id: "UA-158602436-1"
            }
        ]
    ],
    /*
     ** Axios module configuration
     ** See https://axios.nuxtjs.org/options
     */
    axios: {
        baseURL: process.env.API_URL
    },
    i18n: {
        locales: [
            {
                name: "Русский",
                code: "ru",
                iso: "ru-RU",
                file: "ru-RU.js"
            }
        ],
        lazy: true,
        langDir: "locales/",
        defaultLocale: "ru",
        seo: true,
        vuex: {
            syncLocale: true
        }
    },
    bootstrapVue: {
        modules: ["bootstrap-vue/nuxt"],
        css: true,
        bvCSS: false,
        components: [
            "BContainer",
            "BRow",
            "BCol",
            "b-button",
            "BFormInput",
            "BButton",
            "BTable",
            "BModal",
            "BCard",
            "b-navbar",
            "b-card-text",
            "b-icon",
            "b-card-img",
            "b-card-body",
            "b-card-sub-title",
            "b-img",
            "b-card-title",
            "b-card-footer",
            "b-nav-item-dropdown",
            "b-list-group-item",
            "b-table",
            "b-navbar-nav",
            "b-nav-item-dropdown",
            "b-navbar-brand",
            "b-list-group",
            "b-link",
            "b-form-group",
            "b-form-checkbox-group",
            "b-icon",
            "b-modal",
            "b-nav",
            "b-pagination",
            "b-nav-item",
            "b-form-input",
            "b-form-textarea"
        ],
        componentPlugins: ["DropdownPlugin", "ModalPlugin", "CollapsePlugin"]
    },
    moment: {
        defaultLocale: ["ru"],
        locales: ["ru"]
    },
    styleResources: {
        scss: [
            "~/assets/scss/_override.scss",
            "~/assets/scss/_variables.scss",
            "~/assets/scss/_mixins.scss",
            "./node_modules/bootstrap/scss/_functions.scss",
            "./node_modules/bootstrap/scss/_variables.scss",
            "./node_modules/bootstrap/scss/_mixins.scss"
        ]
    },
    /*
     ** Build configuration
     */
    build: {
        transpile: ["vee-validate/dist/rules"],
        /*
         ** You can extend webpack config here
         */
        extend(config, ctx) {
            if (ctx.isDev && ctx.isClient) {
                config.module.rules.push({
                    enforce: "pre",
                    test: /\.(js|vue)$/,

                    exclude: /(node_modules)/
                });
            }
        }
    }
};
