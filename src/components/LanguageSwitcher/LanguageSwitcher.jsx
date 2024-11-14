import { useTranslation } from 'react-i18next';
import Brazil from '../../../public/assets/brazil.svg';
import Irland from '../../../public/assets/irland.svg';
import './LanguageSwitcher.css'

const languageOptions = [
    {
        name: "English",
        value: "en",
        flag: Irland
    },
    {
        name: "Português",
        value: "pt",
        flag: Brazil
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

