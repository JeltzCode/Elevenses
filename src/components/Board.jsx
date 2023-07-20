import Die from './Die'
import './board.css'

export default function Board({dice, holdDice}) {
    return (
        <div className='die-container'>
            <div className='die-rows'>
                {dice.slice(0, 4).map(die => (
                    <div
                    key={die.id}
                    className={die.isHeld? 'die-held':''}
                    onClick={() => holdDice(die.id)}
                    >
                        <Die value={die.value} />
                    </div>
                ))}
            </div>
            <div className='die-rows'>
                <div className='middle-row-spacer'></div> {/* Spacer for center row vertical alignment */}
                {dice.slice(4, 7).map(die => (
                    <div
                        key={die.id}
                        className={die.isHeld? 'middle-row die-held':'middle-row'}
                        onClick={() => holdDice(die.id)}
                    >
                        <Die value={die.value} />
                    </div>
                ))}
            </div>
            <div className='die-rows'>
                {dice.slice(7, 11).map(die => (
                    <div
                        key={die.id}
                        className={die.isHeld? 'die-held':''}
                        onClick={() => holdDice(die.id)}
                    >
                        <Die value={die.value} />
                    </div>
                ))}
            </div>
        </div>
    )
}




            // <div className="dice-container">
            //     {[...Array(3)].map((_, index) => {
            //         const die = dice[index]
            //         return (
            //             <div 
            //                 key={die.id}
            //                 className={die.isHeld ? "die-held" : ""}
            //                 onClick={() => holdDice(die.id)}
            //             >
            //                 <Die value={die.value} />
            //             </div>
            //         )
            //     })}
            // </div>
            // <div className="dice-container">
            //     {[...Array(3)].map((_, index) => {
            //         const die = dice[index + 3]
            //         return (
            //             <div
            //                 key={die.id}
            //                 className={die.isHeld ? "die-held" : ""}
            //                 onClick={() => holdDice(die.id)}
            //             >
            //                 <Die value={die.value} />
            //             </div>
            //         )
            //     })}
            // </div>
            // <div className="dice-container">
            //     {[...Array(3)].map((_, index) => {
            //         const die = dice[index + 6]
            //         return (
            //             <div
            //                 key={die.id}
            //                 className={die.isHeld ? "die-held" : ""}
            //                 onClick={() => holdDice(die.id)}
            //             >
            //                 <Die value={die.value} />
            //             </div>
            //         )
            //     })}
            // </div>
            // <div className="dice-container bottom-row">
            //     {[...Array(2)].map((_, index) => {
            //         const die = dice[index + 9]
            //         return (
            //             <div
            //                 key={die.id}
            //                 className={die.isHeld ? "die-held" : ""}
            //                 onClick={() => holdDice(die.id)}
            //             >
            //                 <Die value={die.value} />
            //             </div>
            //         )
            //     })}
            // </div>