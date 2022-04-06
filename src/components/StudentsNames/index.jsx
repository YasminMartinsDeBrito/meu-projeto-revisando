const students = [
    {name: "Mariana", id:1},
    {name: "Patrick", id: 2}
];

export const StudentsNames = () => {
    return(
        <div>
            {students.map((student, index) => (
                <p key={index}>My name is {student.name}</p>
            ))}
        </div>
    )
}