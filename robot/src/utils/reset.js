export default async function reset() {
    const response = await fetch(`http://localhost:3001/reset`)
    const states = await response.json()
    return states
}