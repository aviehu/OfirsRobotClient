export default async function deletePosition(phase, id) {
    const options = {
        method: 'DELETE',
    }
    const response = await fetch(`http://localhost:3001/${phase}/${id}`, options)
    const result = response.json()
    return result
}