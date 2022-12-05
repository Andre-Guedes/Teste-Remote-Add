import styles from "./keyboard.module.css"

const key = ["a", "á", "ã", "â", "b", "c", "d", "e", "é", "f", "g", "h", "i", "í", "j", "k", "l", "m", "n", "o" ,"õ", "ô", "ó", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "-"]

type keyboardProps = {
    activeLetters: string[]
    inactiveLetters: string[]
    addGuessedLetter: (letter: string) => void
    disabled ?: boolean
}
export function Keyboard({activeLetters, inactiveLetters, addGuessedLetter, disabled=false}: keyboardProps) {
    return (
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(75px, 1fr))", gap: "3rem" }} >
            {key.map(key => {
                const isActive = activeLetters.includes(key)
                const isInactive = inactiveLetters.includes(key)
                return (
                    <button 
                        onClick = {() => addGuessedLetter(key)}
                        className={ `
                            ${styles.btn} 
                            ${ isActive ? styles.active : ""}
                            ${ isInactive ? styles.inactive : ""}` }
                        disabled={isActive || isInactive || disabled}
                        key={key}>{key}
                    </button>
                )
            })}
        </div>
    )
}