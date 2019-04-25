import { syncTranslationWithStore, loadTranslations, setLocale } from "react-redux-i18n";
import translations from "./locales";

export const initializeI18n = (store, locale) => {
    syncTranslationWithStore(store);
    store.dispatch(loadTranslations(translations));
    store.dispatch(setLocale(locale));
};
