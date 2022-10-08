export default async function addPosition(newPosition, phase) {
    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(newPosition),
    }
    const response = await fetch(`http://localhost:3001/addposition/${phase}`, options)
    const result = response.json()
    return result
}