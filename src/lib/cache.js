module.exports = {
  get authEndPoint() {
    return window.sessionStorage.getItem("authEndpoint") || "";
  },
  set authEndPoint(value) {
    window.sessionStorage.setItem("authEndpoint", "");
  },

  get tokenEndpoint() {
    return window.sessionStorage.getItem("tokenEndpoint") || "";
  },
  set tokenEndpoint(value) {
    window.sessionStorage.setItem("tokenEndpoint", value);
  },

  get auth() {
    return window.sessionStorage.getItem("auth") || "True";
  },
  set auth(value) {
    window.sessionStorage.setItem("auth", value);
  },

  get arcio() {
    return window.sessionStorage.getItem("arcio") || "dev";
  },
  set arcio(value) {
    window.sessionStorage.setItem("arcio", value);
  },

  get client_id() {
    return window.sessionStorage.getItem("client_id") || "";
  },
  set client_id(value) {
    window.sessionStorage.setItem("client_id", value);
  },

  get client_secret() {
    return window.sessionStorage.getItem("client_secret") || "";
  },
  set client_secret(value) {
    window.sessionStorage.setItem("client_secret", value);
  },

  get cloudflare() {
    return window.sessionStorage.getItem("cloudflare") || "";
  },
  set cloudflare(value) {
    window.sessionStorage.setItem("cloudflare", value);
  },

  get build_interval() {
    return parseInt(window.sessionStorage.getItem("build_interval")) || 120;
  },
  set build_interval(value) {
    window.sessionStorage.setItem("build_interval", toString(value));
  },

  get build_type() {
    return window.sessionStorage.getItem("build_type") || "hybrid";
  },
  set build_type(value) {
    window.sessionStorage.setItem("build_type", value);
  },

  get transcoded() {
    return window.sessionStorage.getItem("transcoded") || "False";
  },
  set transcoded(value) {
    window.sessionStorage.setItem("transcoded", value);
  },

  get signup() {
    return window.sessionStorage.getItem("signup") || "False";
  },
  set signup(value) {
    window.sessionStorage.setItem("signup", value);
  },

  get subtitles() {
    return window.sessionStorage.getItem("subtitles") || "False";
  },
  set subtitles(value) {
    window.sessionStorage.setItem("subtitles", value);
  },

  get scope() {
    return window.sessionStorage.getItem("scope") || "";
  },
  set scope(value) {
    window.sessionStorage.setItem("scope", value);
  },

  get customParameters() {
    return window.sessionStorage.getItem("customParameters") || "";
  },
  set customParameters(value) {
    window.sessionStorage.setItem("customParameters", value);
  },

  get state() {
    return window.sessionStorage.getItem("state") || "";
  },
  set state(value) {
    window.sessionStorage.setItem("state", value);
  },

  get authCode() {
    return window.sessionStorage.getItem("authCode") || "";
  },
  set authCode(value) {
    window.sessionStorage.setItem("authCode", value);
  },

  get access_token() {
    return window.sessionStorage.getItem("access_token") || "";
  },
  set access_token(value) {
    window.sessionStorage.setItem("access_token", value);
  },

  get refresh_token() {
    return window.sessionStorage.getItem("refresh_token") || "";
  },
  set refresh_token(value) {
    window.sessionStorage.setItem("refresh_token", value);
  },

  get account_list() {
    return JSON.parse(window.sessionStorage.getItem("account_list")) || [];
  },
  set account_list(value) {
    window.sessionStorage.setItem("account_list", JSON.stringify(value));
  },

  get category_list() {
    return JSON.parse(window.sessionStorage.getItem("category_list")) || [];
  },
  set category_list(value) {
    window.sessionStorage.setItem("category_list", JSON.stringify(value));
  },

  set service_accounts(value) {
    window.sessionStorage.setItem("service_accounts", JSON.stringify(value));
  },
  get service_accounts() {
    return JSON.parse(window.sessionStorage.getItem("service_accounts")) || [];
  },

  get secret_key() {
    return window.sessionStorage.getItem("secret_key") || "";
  },
  set secret_key(value) {
    window.sessionStorage.setItem("secret_key", value);
  },

  get tmdb_api_key() {
    return window.sessionStorage.getItem("tmdb_api_key") || "";
  },
  set tmdb_api_key(value) {
    window.sessionStorage.setItem("tmdb_api_key", value);
  },

  get configBox() {
    return window.sessionStorage.getItem("configBox") || "";
  },
  set configBox(value) {
    window.sessionStorage.setItem("configBox", value);
  },
};
