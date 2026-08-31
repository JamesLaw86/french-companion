// French Companion — shared behaviour for all pages.
//
// Practice mode: the nav button blurs every English translation (.en element)
// so you can test yourself; click a translation to reveal just that one.
// The setting is remembered between visits via localStorage.

document.addEventListener("DOMContentLoaded", () => {
  const btn = document.getElementById("practiceToggle");
  if (!btn) return;

  function apply(on) {
    document.body.classList.toggle("practice", on);
    btn.classList.toggle("on", on);
    btn.textContent = on ? "👀 Practice: on" : "🙈 Practice";
  }

  let on = false;
  try { on = localStorage.getItem("practice") === "1"; } catch (e) { /* storage blocked — default off */ }
  apply(on);

  btn.addEventListener("click", () => {
    on = !on;
    try { localStorage.setItem("practice", on ? "1" : "0"); } catch (e) { /* fine */ }
    apply(on);
    // Leaving practice mode resets any translations you revealed.
    if (!on) {
      document.querySelectorAll(".en.revealed").forEach(el => el.classList.remove("revealed"));
    }
  });

  // In practice mode, clicking a blurred translation reveals it (click again to re-hide).
  document.addEventListener("click", e => {
    if (!document.body.classList.contains("practice")) return;
    const en = e.target.closest(".en");
    if (en) en.classList.toggle("revealed");
  });
});
