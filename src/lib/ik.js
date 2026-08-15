export const ik = (url, tr) => `${url}?tr=${tr}`;

export const thumb    = (url) => ik(url, "w-600,q-75,f-auto");
export const full     = (url) => ik(url, "w-1800,q-85,f-auto");
export const blur     = (url) => ik(url, "w-24,q-20,bl-8,f-auto");
export const download = (url) => `${url}?ik-attachment=true`;