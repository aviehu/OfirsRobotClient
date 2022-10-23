import { Client } from 'node-osc';

export default function runPhase(percentageTable, states) {
    const client = new Client('10.0.0.3', 8888);
    client.send('/posture', 2300, -1, -1, -1, () => {
        client.close();
    });
}