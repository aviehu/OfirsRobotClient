export default async function getPosition(phase, id) {
    const response = await fetch(`http://localhost:3001/${phase}/${id}`)
    const position = await response.json()
    return position
}