export default async function moveDown(phase, id) {
    const response = await fetch(`http://localhost:3001/movedown/${phase}/${id}`)
    const answer = await response.json()
    return answer
}