import en from 'vee-validate/dist/locale/en.json'
import ru from 'vee-validate/dist/locale/ru.json'
import { localize } from 'vee-validate'

export default function ({ app }) {
    localize({
        en,
        ru
    });

    localize(app.i18n.loadedLanguages[0]);

    app.i18n.beforeLanguageSwitch = (oldLocale, newLocale) => {
        localize(newLocale)
    }
}
