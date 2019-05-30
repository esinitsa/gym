import { I18n } from "react-redux-i18n";

export const calendarLocale = () => {
  return {
    monthNames: [
      I18n.t("calendar.monthNames.january"),
      I18n.t("calendar.monthNames.february"),
      I18n.t("calendar.monthNames.march"),
      I18n.t("calendar.monthNames.april"),
      I18n.t("calendar.monthNames.may"),
      I18n.t("calendar.monthNames.june"),
      I18n.t("calendar.monthNames.july"),
      I18n.t("calendar.monthNames.august"),
      I18n.t("calendar.monthNames.september"),
      I18n.t("calendar.monthNames.october"),
      I18n.t("calendar.monthNames.november"),
      I18n.t("calendar.monthNames.december")
    ],
    monthNamesShort: [
      I18n.t("calendar.monthNamesShort.january"),
      I18n.t("calendar.monthNamesShort.february"),
      I18n.t("calendar.monthNamesShort.march"),
      I18n.t("calendar.monthNamesShort.april"),
      I18n.t("calendar.monthNamesShort.may"),
      I18n.t("calendar.monthNamesShort.june"),
      I18n.t("calendar.monthNamesShort.july"),
      I18n.t("calendar.monthNamesShort.august"),
      I18n.t("calendar.monthNamesShort.september"),
      I18n.t("calendar.monthNamesShort.october"),
      I18n.t("calendar.monthNamesShort.november"),
      I18n.t("calendar.monthNamesShort.december")
    ],
    dayNames: [
      I18n.t("calendar.dayNames.monday"),
      I18n.t("calendar.dayNames.tuesday"),
      I18n.t("calendar.dayNames.wednesday"),
      I18n.t("calendar.dayNames.thursday"),
      I18n.t("calendar.dayNames.friday"),
      I18n.t("calendar.dayNames.saturday"),
      I18n.t("calendar.dayNames.sunday")
    ],
    dayNamesShort: [
      I18n.t("calendar.dayNamesShort.monday"),
      I18n.t("calendar.dayNamesShort.tuesday"),
      I18n.t("calendar.dayNamesShort.wednesday"),
      I18n.t("calendar.dayNamesShort.thursday"),
      I18n.t("calendar.dayNamesShort.friday"),
      I18n.t("calendar.dayNamesShort.saturday"),
      I18n.t("calendar.dayNamesShort.sunday")
    ]
  };
};

export const getCurrentDate = () => {
  const today = new Date();
  let dd = today.getDate();
  let mm = today.getMonth() + 1;
  const yyyy = today.getFullYear();
  if (dd < 10) {
    dd = "0" + dd;
  }
  if (mm < 10) {
    mm = "0" + mm;
  }
  return  `${yyyy}-${mm}-${dd}`;
};
