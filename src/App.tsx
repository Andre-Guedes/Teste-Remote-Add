import { useEffect, useState, useCallback } from "react"
import { HangmanDrawing } from "./HangmanDrawing"
import { HangmanWord } from "./HangmanWord"
import { Keyboard } from "./Keyboard"
import words from "./wordList.json"

function App() {
  const [wordToGuess, setWordToGuess] = useState(() => {
    return words[Math.floor(Math.random() * words.length)]
  })

  const [guessedLetters, setGuessedLetters] = useState<string[]>([])

  const incorrectLetter = guessedLetters.filter(letter => !wordToGuess.includes(letter))

  const isLoser = incorrectLetter.length >= 6
  const isWinner = wordToGuess.split('').every(letter => guessedLetters.includes(letter))

  const addGuessedLetter = useCallback ((letter: string) => {
    (guessedLetters.includes(letter) || isLoser || isWinner ) ? null : setGuessedLetters(currentLetters => [...currentLetters, letter])
  }, [guessedLetters, isLoser, isWinner])

  useEffect(() =>{
    const handle = (e: KeyboardEvent) => {
      const key = e.key
      key.match(/^[a-z]$/) ? (e.preventDefault(), addGuessedLetter(key)) : null
    }

    document.addEventListener("keypress", handle)

    return () => {document.removeEventListener("keypress", handle)}
  },[guessedLetters])

  return (
    <div style={{
      transform: "scale(.5)",
      transformOrigin: "top",
      maxWidth: "1500px",
      display: "flex",
      flexDirection: "column",
      gap: "2.5rem",
      alignItems: "center",
      margin: "0 auto"
    }}>
      <HangmanDrawing numberOfGuessed = {incorrectLetter.length} />
      <HangmanWord reveal={isLoser} guessedLetters={guessedLetters} wordToGuess={wordToGuess} />
      <div style={{alignSelf: "stretch"}}>
        <Keyboard 
          activeLetters = {guessedLetters.filter(letter => 
            wordToGuess.includes(letter))}
          inactiveLetters = {incorrectLetter}
          addGuessedLetter = {addGuessedLetter}
          disabled = {isWinner || isLoser}
        />
      </div>
      <div 
        style={{
          fontSize: "2rem", 
          textAlign: "center", 
          marginTop: "-80px",
          letterSpacing: "2.5",
          fontFamily: "monospace",
          color: "white",
          textShadow: "2px 2px 5px black"}}>
            {isLoser && <><h3 style={{marginBottom: "-20px"}}>Bela tentativa, mas não foi dessa vez.</h3> <p>Recarrege a página e tente novamente.</p></>}
            {isWinner && <><h3 style={{marginBottom: "-20px"}}>PARABÉNS!!!</h3> <p>Recarrege a página e tente novamente.</p></>}
      </div>
    </div>
  )
}

export default App
