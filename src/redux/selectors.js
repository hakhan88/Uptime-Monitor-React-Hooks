export const getUptimes = state => state.uptimes;

export const getUptimeByDomain = (state, domain) => state.uptimes[domain];

export const getLastCheckedByDomain = (state, domain) =>
    state.uptimes[domain].lastChecked;

export const getLatencyByDomain = (state, domain) =>
    state.uptimes[domain].latency;

export const getStatusByDomain = (state, domain) =>
    state.uptimes[domain].status;

export const getDomains = state =>
    state.domains.domains;
