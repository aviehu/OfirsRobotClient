export default async function stopPhase() {
    const response = await fetch(`http://localhost:3001/stop`)
    const states = await response.json()
    return states
}