const numbers = [1,2,3,4,5];

export const OddNumbersList = () => {
    return (
        <div>

            {numbers
                .filter((number) => number % 2 !== 0)
                .map((filteredNumber, index) => (
                    <p key={index}>{filteredNumber}</p>
                ))  }
        </div>
    )
}