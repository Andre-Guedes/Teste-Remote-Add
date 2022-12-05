const head = (
    <div style={{ height: "50px", width: "50px", borderRadius: "100%", border: "10px solid black", position: "absolute", top: "60px", right: "-30px"}}/>
)

const body = (
    <div style={{ height: "100px", width: "10px", background: "black", position: "absolute", top: "130px", right: "0" }}/>
)

const leftArm = (
    <div style={{ height: "10px", width: "80px", background: "black", position: "absolute", top: "130px", right: "0", rotate: "30deg" }}/>
)

const rightArm = (
<div style={{ height: "10px", width: "80px", background: "black", position: "absolute", top: "130px", right: "-70px", rotate: "-30deg" }}/>
)

const leftLeg = (
    <div style={{ height: "10px", width: "80px", background: "black", position: "absolute", top: "250px", right: "-8px", rotate: "310deg" }}/>
)

const rightLeg = (
    <div style={{ height: "10px", width: "80px", background: "black", position: "absolute", top: "250px", right: "-62px", rotate: "-310deg" }}/>
    )
    
const bodyParts = [head, body, leftArm, rightArm, leftLeg, rightLeg]

type HagmanDrawingProps = {
    numberOfGuessed: number
}

export function HangmanDrawing ({numberOfGuessed}:HagmanDrawingProps) {
    return (
        <div style={{ position: "relative" }}>
            { bodyParts.slice(0, numberOfGuessed) }
            <div style={{ height: "50px", width: "10px", background: "black", position: "absolute", top: "10px", right: "0"}}/>
            <div style={{ height: "10px", width: "200px", background: "black", marginLeft: "120px" }}/>
            <div style={{ height: "400px", width: "10px", background: "black", marginLeft: "120px" }}/>
            <div style={{ height: "10px", width: "250px", background: "black" }}/>
        </div>
    )
}