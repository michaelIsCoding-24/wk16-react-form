type ButtonProps = {
    style: string,
    onClick: () => void,
    text: string
}

function Button({style, onClick, text}: ButtonProps){
    return <button className={style} onClick={onClick}>{text}</button>
}

export default Button