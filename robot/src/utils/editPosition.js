export default async function editPosition(newPosition, phase) {
    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(newPosition),
    }
    const response = await fetch(`http://localhost:3001/editposition/${phase}`, options)
    const result = response.json()
    return result
}