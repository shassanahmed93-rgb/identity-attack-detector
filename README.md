# Identity Attack Detector

Find clusters of login failures followed by success for the same account.

[Run the portfolio demo](https://shassanahmed.space/cyber-labs/identity-attack-detector/)

## Reproduce the result

Open `index.html` in a modern browser or run `node test.mjs` with Node.js 20+. The demo accepts editable JSON and exports evidence. The sample input is in `fixture.json`.

## Sample evidence

```json
{
  "count": 1,
  "findings": [
    {
      "user": "demo-user",
      "time": 140,
      "failures": 3,
      "windowSeconds": 300
    }
  ]
}
```

## Scope

Synthetic lab inputs and deterministic rules. Review results before applying them to a real incident.

## What this demonstrates

**Correlate authentication events within a five-minute window.** Compare a failure cluster followed by a success with the same sequence outside the detection window. This is a per-account signal. Investigate MFA, device, and source before escalation.

[Reference guidance](https://attack.mitre.org/techniques/T1110/)
