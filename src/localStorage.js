import store from "@/store";

export function getLocalUserData() {
  const settings = JSON.parse(localStorage.getItem("settings"));
  const profile = JSON.parse(localStorage.getItem("profile"));
  if (settings) store.dispatch("core/saveSettings", settings);
  if (profile) store.dispatch("profile/setProfile", profile);
}

export function storeSettings(settings) {
  localStorage.setItem("settings", JSON.stringify(settings));
}

export function storeProfile(profile) {
  localStorage.setItem("profile", JSON.stringify(profile));
}

export function storeToken(token) {
  localStorage.setItem("token", token);
}

export function getToken() {
  return localStorage.getItem("token");
}
