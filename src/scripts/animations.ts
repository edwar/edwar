import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

if (!prefersReducedMotion) {
	// One entrance style everywhere: rise 16px and fade, once.
	const rise = { y: 16, opacity: 0 };
	const ease = "power3.out";

	// ─── HERO ENTRANCE ───────────────────────────────────
	gsap.set("[data-hero]", rise);
	gsap.to("[data-hero]", { y: 0, opacity: 1, duration: 0.7, ease, stagger: 0.08, delay: 0.1 });

	// ─── SCROLL REVEALS ──────────────────────────────────
	gsap.utils.toArray<HTMLElement>("[data-reveal]").forEach((el) => {
		gsap.fromTo(el, rise, {
			y: 0, opacity: 1, duration: 0.7, ease,
			scrollTrigger: { trigger: el, start: "top 92%", toggleActions: "play none none none" },
		});
	});

	// ─── NAVBAR SHADOW ON SCROLL ─────────────────────────
	const nav = document.querySelector<HTMLElement>("nav[data-site-nav]");
	if (nav) {
		ScrollTrigger.create({
			trigger: "body",
			start: "top top",
			end: "120px top",
			onUpdate: (self) => {
				nav.style.boxShadow = `0 8px 24px -12px rgb(0 0 0 / calc(var(--nav-shadow-alpha) * ${self.progress.toFixed(2)}))`;
			},
		});
	}

	// ─── HERO NAME: VARIABLE TYPE REACTS TO THE POINTER ──
	const letters = gsap.utils.toArray<HTMLElement>("[data-letter]");
	const REST = { wght: 620, wdth: 88 };
	const PEAK = { wght: 800, wdth: 100 };
	const state = letters.map(() => ({ t: 0 }));

	const apply = (el: HTMLElement, t: number) => {
		el.style.fontWeight = String(Math.round(gsap.utils.interpolate(REST.wght, PEAK.wght, t)));
		el.style.fontStretch = `${gsap.utils.interpolate(REST.wdth, PEAK.wdth, t).toFixed(1)}%`;
	};
	letters.forEach((el, i) => apply(el, state[i].t));

	// One-time sweep on load so touch devices see it too
	gsap.to(state, {
		t: 1, duration: 0.6, ease: "power2.out", stagger: { each: 0.07, yoyo: true, repeat: 1 }, delay: 0.5,
		onUpdate: () => letters.forEach((el, i) => apply(el, state[i].t)),
	});

	// Pointer proximity, fine pointers only
	if (window.matchMedia("(hover: hover) and (pointer: fine)").matches) {
		let pointer: { x: number; y: number } | null = null;
		let raf = 0;
		const RADIUS = 220;

		const frame = () => {
			raf = 0;
			letters.forEach((el, i) => {
				let target = 0;
				if (pointer) {
					const r = el.getBoundingClientRect();
					const d = Math.hypot(pointer.x - (r.left + r.width / 2), pointer.y - (r.top + r.height / 2));
					target = Math.max(0, 1 - d / RADIUS) ** 1.5;
				}
				state[i].t += (target - state[i].t) * 0.2;
				apply(el, state[i].t);
			});
			if (pointer || state.some((s) => s.t > 0.01)) raf = requestAnimationFrame(frame);
		};
		const kick = () => { if (!raf) raf = requestAnimationFrame(frame); };

		window.addEventListener("pointermove", (e) => { pointer = { x: e.clientX, y: e.clientY }; kick(); }, { passive: true });
		document.addEventListener("pointerleave", () => { pointer = null; kick(); });
	}
}

// Hand over from the CSS pre-hide to GSAP's inline states
document.documentElement.classList.add("gsap-ready");
