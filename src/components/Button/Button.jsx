
import './Button.css'

function Button ({arrow, buttonStyle, loading, children, ...props}){


    return (
        <button className={`button ${buttonStyle}`}{...props}>
                {children}
        </button>
    )

}
export default Button