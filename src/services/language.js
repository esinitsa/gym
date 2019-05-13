import { Platform, NativeModules } from "react-native";

export const getLanguageCode = () => {
  let systemLanguage;
  if (Platform.OS === "android") {
    systemLanguage = NativeModules.I18nManager.localeIdentifier;
  } else {
    systemLanguage = NativeModules.SettingsManager.settings.AppleLocale;
  }
  const language = systemLanguage.substring(0, 2);
  return language.includes("en") || language.includes("ru") ? language : "ru";
};
