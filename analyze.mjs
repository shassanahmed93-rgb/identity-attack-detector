export function analyze(input) {
  const failures = new Map();
  const findings = [];
  for (const event of [...input.events].sort((a,b) => a.time - b.time)) {
    const recent = (failures.get(event.user) ?? []).filter(time => event.time - time <= 300);
    if (event.result === "failure") recent.push(event.time);
    if (event.result === "success" && recent.length >= 3) {
      findings.push({user:event.user, time:event.time, failures:recent.length, windowSeconds:300});
    }
    failures.set(event.user, event.result === "success" ? [] : recent);
  }
  return {count:findings.length, findings};
}
