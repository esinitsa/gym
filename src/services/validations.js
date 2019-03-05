import { I18n } from "react-redux-i18n";

export const required = value => (value ? undefined : I18n.t("login.messages.required"));

export const maxLength = max => value =>
    value && value.length > max ? I18n.t("login.messages.maxLength", { max: max }) : undefined;

export const minLength = min => value =>
    value && value.length < min ? I18n.t("login.messages.minLength", { min: min }) : undefined;

export const minValue = min => value =>
    value && value < 1000 ? I18n.t("settings.advertisement.form.minClicks") : undefined;

export const numberOnly = value =>
    value && !/^\d+$/i.test(value) ? I18n.t("settings.advertisement.form.onlyNumbers") : undefined;

export const emailRegexCheck = value =>
    value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,6}$/i.test(value)
        ? I18n.t("login.messages.invalidEmail")
        : undefined;

export const urlRegexCheck = value =>
    value &&
    !/(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/i.test(value)
        ? I18n.t("settings.advertisement.form.invalidUrl")
        : undefined;

export const emailsArrayRegexCheck = value => {
    var ans;
    if (value) {
        value.split(",").forEach((email) => {
            if (!ans) {
                ans = emailRegexCheck(email.trim());
            }
        });
    }
    return ans;
};

export const handleMaxLength = max => value => {
    return value ? value.slice(0, max) : value;
};
