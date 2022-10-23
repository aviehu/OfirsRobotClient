export default async function runPhase(phase) {
    const response = await fetch(`http://localhost:3001/startphase/${phase}`)
    const states = await response.json()
    return states
}