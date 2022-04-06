const fruits = ["apple", "banana", "orange"]

export const FruitList = () => {
    return (
        <ul>
            {fruits.map((fruit, index) => (
                <li key={index}>{fruit}</li>
            ))}
        </ul>
    )
}