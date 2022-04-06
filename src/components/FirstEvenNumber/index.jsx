const numbers = [1,3,4,5,6];

export const FirstEvenNumber = () => {
    return (
        <p>{numbers.find((number) => number % 2 === 0)}</p>
    )
}