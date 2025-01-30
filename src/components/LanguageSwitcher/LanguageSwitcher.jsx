import { useTranslation } from 'react-i18next';
import './LanguageSwitcher.css'

const languageOptions = [
    {
        name: "English",
        value: "en",
        flag: "irland.svg"
    },
    {
        name: "Português",
        value: "pt",
        flag: "brazil.svg"
    }
]

export const LanguageSwitcher = () => {
    const {t, i18n} = useTranslation();

    return (
        <div className="language_switcher">
            <span>{t('selectYourLanguage')}</span>

            {languageOptions.map(languageOption => (
                <button
                key={languageOption.value}
                onClick={() => {
                i18n.changeLanguage(languageOption.value)    
                }}
                
                >
                    <img height="30px" src={languageOption.flag} />
                    
                </button>
            ))}
        </div>
    )
}

