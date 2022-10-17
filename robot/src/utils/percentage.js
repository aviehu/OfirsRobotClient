export default async function percentage() {
    const response = await fetch(`http://localhost:3001/percentage`)
    const answer = await response.json()
    return answer
}