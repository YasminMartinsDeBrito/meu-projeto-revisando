const numbers  = [1,2,3,4,5];

export const SumOfNumbers = () =>{
    return (
        <p>
            {numbers.reduce(
                (accumulator, currentValue) => accumulator + currentValue
            )}
        </p>
    )
}