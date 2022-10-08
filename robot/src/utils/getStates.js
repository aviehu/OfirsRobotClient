export default async function getStates(phase) {
    const response = await fetch(`http://localhost:3001/${phase}`)
    const states = await response.json()
    return states
}