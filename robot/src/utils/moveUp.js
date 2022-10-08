export default async function moveUp(phase, id) {
    const response = await fetch(`http://localhost:3001/moveup/${phase}/${id}`)
    const answer = await response.json()
    return answer
}