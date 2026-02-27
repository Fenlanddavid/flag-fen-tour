import { STOPS } from "./data.js";

export function stopBySlug(slug){
 return STOPS.find(s=>s.slug===slug)||null;
}

const KEY_DONE = "fen_done_audio";

export function getDone() {
  return JSON.parse(localStorage.getItem(KEY_DONE) || "[]");
}

export function markDone(slug) {
  const done = new Set(getDone());
  done.add(slug);
  localStorage.setItem(KEY_DONE, JSON.stringify([...done]));
}

export function clearDone() {
  localStorage.removeItem(KEY_DONE);
}

export function haptic(pattern = 25) {
  if (navigator.vibrate) {
    navigator.vibrate(pattern);
  }
}
