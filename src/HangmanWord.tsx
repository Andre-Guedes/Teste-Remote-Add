type HangmanWordProps = {
    guessedLetters: string[]
    wordToGuess: string
    reveal?: boolean
}

export function HangmanWord({ guessedLetters, wordToGuess, reveal=false }: HangmanWordProps) {

    return (
        <div style={{ 
            display: "flex", 
            gap: ".4em", 
            fontSize: "6rem", 
            textTransform: "uppercase", 
            fontWeight: "bold", 
            fontFamily: "monospace" }}>
                {wordToGuess.split("").map( (letter, index) => (
                    <span style = {{ borderBottom: "8px solid black" }} key={index}>
                        <span 
                            style = {{ 
                                visibility: guessedLetters.includes(letter) || reveal ? 
                                    "visible" : "hidden",
                                color: !guessedLetters.includes(letter) && reveal ? "red" : "black"}}>
                            {letter}
                        </span>
                    </span>
                ))}
        </div>
    )
}