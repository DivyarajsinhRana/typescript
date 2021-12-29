type RandomValue = {
    value : number
}
type RandomPositive =RandomValue &{
    isPositive : boolean,
    isNegative? : never,
    isZero? : never,
}
type RandomNegative = RandomValue &{
    isNegative : boolean,
    isPositive? : never,
    isZero? : never,
}
type RandomZero = RandomValue &{
    isZero : boolean,
    isNegative? : never,
    isPositive? : never,
}


// type RandomNumberProps = {
//     value  : number,
//     isPositive : boolean
//     isNagetive : boolean
//     isZero : boolean
// }

type RandomNumberProps = RandomPositive | RandomNegative | RandomZero

const RandomNumber = ({value,isPositive,isNegative,isZero}: RandomNumberProps) => {
    return (
        <div>
            {value} {isPositive && " is Positive"}{isNegative && " is nagetivie"}{isZero && " is Zero"}
        </div>
    )
}

export default RandomNumber
