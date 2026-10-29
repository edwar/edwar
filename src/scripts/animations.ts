import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

if (!prefersReducedMotion) {

	// ─── HERO ENTRANCE ───────────────────────────────────
	const heroTl = gsap.timeline({
		defaults: { ease: "power2.out" },
		delay: 0.15,
	});

	gsap.set("[data-hero-line]", { yPercent: 110, opacity: 0 });
	gsap.set("[data-hero-sub]", { y: 30, opacity: 0 });
	gsap.set("[data-hero-bio]", { y: 25, opacity: 0 });
	gsap.set("[data-hero-btn]", { y: 20, opacity: 0, scale: 0.95 });
	gsap.set("[data-hero-img]", { scale: 0.8, opacity: 0, filter: "blur(12px)" });
	gsap.set("[data-hero-badge]", { y: -15, opacity: 0 });
	gsap.set("[data-hero-nav]", { y: -20, opacity: 0 });

	heroTl
		.to("[data-hero-nav]", { y: 0, opacity: 1, duration: 0.6, ease: "power3.out" }, 0)
		.to("[data-hero-badge]", { y: 0, opacity: 1, duration: 0.5, ease: "back.out(1.4)" }, 0.1)
		.to("[data-hero-line]", { yPercent: 0, opacity: 1, duration: 1, ease: "power3.out", stagger: 0.12 }, 0.15)
		.to("[data-hero-sub]", { y: 0, opacity: 1, duration: 0.7, ease: "power2.out" }, 0.55)
		.to("[data-hero-bio]", { y: 0, opacity: 1, duration: 0.7, ease: "power2.out" }, 0.7)
		.to("[data-hero-btn]", { y: 0, opacity: 1, scale: 1, duration: 0.6, ease: "back.out(1.2)" }, 0.85)
		.to("[data-hero-img]", { scale: 1, opacity: 1, filter: "blur(0px)", duration: 1.4, ease: "power2.inOut" }, 0.25);

	// ─── NAVBAR SCROLL SHRINK ────────────────────────────
	ScrollTrigger.create({
		trigger: "body",
		start: "top top",
		end: "120px top",
		onUpdate: (self) => {
			const p = self.progress;
			const nav = document.querySelector("nav") as HTMLElement;
			if (!nav) return;
			const padding = gsap.utils.interpolate(8, 4, p);
			const shadowAlpha = gsap.utils.interpolate(0, 0.12, p);
			nav.style.paddingBlock = `${padding}px`;
			nav.style.boxShadow = `0 1px 12px rgba(0,0,0,${shadowAlpha})`;
		},
	});

	// ─── SCROLL REVEALS ──────────────────────────────────
	// Slide up from bottom — smooth power2
	gsap.utils.toArray<HTMLElement>("[data-gsap='reveal']").forEach((el) => {
		gsap.fromTo(el,
			{ y: 50, opacity: 0 },
			{
				y: 0, opacity: 1, duration: 1, ease: "power2.out",
				scrollTrigger: { trigger: el, start: "top 93%", toggleActions: "play none none none" },
			}
		);
	});

	// 3D rotate-in for cards — organic feel with column-based delay
	gsap.utils.toArray<HTMLElement>("[data-gsap='card']").forEach((el, i) => {
		const col = i % 3;
		const row = Math.floor(i / 3);
		const colDelay = col * 0.08;
		const rowDelay = row * 0.05;

		gsap.fromTo(el,
			{
				y: 70,
				opacity: 0,
				rotateX: 6,
				rotateY: col === 0 ? -4 : col === 2 ? 4 : 0,
				scale: 0.93,
				transformPerspective: 800,
			},
			{
				y: 0, opacity: 1, rotateX: 0, rotateY: 0, scale: 1,
				duration: 0.9,
				delay: colDelay + rowDelay,
				ease: "power2.inOut",
				onComplete: () => { el.dataset.entered = "true"; },
				scrollTrigger: { trigger: el, start: "top 95%", toggleActions: "play none none none" },
			}
		);
	});

	// Elastic pop-in for skill items — satisfying bounce
	gsap.utils.toArray<HTMLElement>("[data-gsap='pop']").forEach((el, i) => {
		gsap.fromTo(el,
			{ scale: 0, opacity: 0, rotation: -8 },
			{
				scale: 1, opacity: 1, rotation: 0,
				duration: 0.7, delay: i * 0.04,
				ease: "elastic.out(1, 0.4)",
				scrollTrigger: { trigger: el, start: "top 92%", toggleActions: "play none none none" },
			}
		);
	});

	// Slide from left — with subtle overshoot
	gsap.utils.toArray<HTMLElement>("[data-gsap='slide-left']").forEach((el) => {
		gsap.fromTo(el,
			{ x: -50, opacity: 0 },
			{
				x: 0, opacity: 1, duration: 0.9,
				ease: "power2.out",
				scrollTrigger: { trigger: el, start: "top 93%", toggleActions: "play none none none" },
			}
		);
	});

	// Slide from right
	gsap.utils.toArray<HTMLElement>("[data-gsap='slide-right']").forEach((el) => {
		gsap.fromTo(el,
			{ x: 50, opacity: 0 },
			{
				x: 0, opacity: 1, duration: 0.9,
				ease: "power2.out",
				scrollTrigger: { trigger: el, start: "top 93%", toggleActions: "play none none none" },
			}
		);
	});

	// Clip-path text reveal — fluid inOut
	gsap.utils.toArray<HTMLElement>("[data-gsap='clip']").forEach((el) => {
		gsap.fromTo(el,
			{ clipPath: "inset(0 0 100% 0)", y: 15 },
			{
				clipPath: "inset(0 0 0% 0)", y: 0,
				duration: 0.9, ease: "power2.inOut",
				scrollTrigger: { trigger: el, start: "top 90%", toggleActions: "play none none none" },
			}
		);
	});

	// Scale-in — smooth expansion
	gsap.utils.toArray<HTMLElement>("[data-gsap='scale']").forEach((el) => {
		gsap.fromTo(el,
			{ scale: 0.85, opacity: 0, y: 15 },
			{
				scale: 1, opacity: 1, y: 0, duration: 1,
				ease: "power2.inOut",
				scrollTrigger: { trigger: el, start: "top 93%", toggleActions: "play none none none" },
			}
		);
	});

	// ─── PARALLAX ────────────────────────────────────────
	gsap.utils.toArray<HTMLElement>("[data-gsap='parallax']").forEach((el) => {
		const speed = parseFloat(el.dataset.speed || "0.3");
		gsap.to(el, {
			y: () => -100 * speed,
			scrollTrigger: { trigger: el, start: "top bottom", end: "bottom top", scrub: 1.5 },
		});
	});

	// ─── 3D TILT ON HOVER ────────────────────────────────
	// Hover effects only make sense with a real pointer, not on touch
	const canHover = window.matchMedia("(hover: hover) and (pointer: fine)").matches;

	if (canHover) document.querySelectorAll<HTMLElement>("[data-tilt]").forEach((card) => {
		let rafId: number;

		card.addEventListener("mousemove", (e) => {
			// Don't fight the scroll entrance tween
			if (card.dataset.entered !== "true") return;
			cancelAnimationFrame(rafId);
			rafId = requestAnimationFrame(() => {
				const rect = card.getBoundingClientRect();
				const x = e.clientX - rect.left;
				const y = e.clientY - rect.top;
				const centerX = rect.width / 2;
				const centerY = rect.height / 2;
				const rotateX = ((y - centerY) / centerY) * -6;
				const rotateY = ((x - centerX) / centerX) * 6;

				gsap.to(card, {
					rotateX, rotateY,
					transformPerspective: 800,
					duration: 0.5,
					ease: "power2.out",
					overwrite: "auto",
				});
			});
		});

		card.addEventListener("mouseleave", () => {
			if (card.dataset.entered !== "true") return;
			cancelAnimationFrame(rafId);
			gsap.to(card, {
				rotateX: 0, rotateY: 0,
				duration: 0.7,
				ease: "elastic.out(1, 0.4)",
				overwrite: "auto",
			});
		});
	});

	// ─── MAGNETIC EFFECT ON BUTTONS ───────────────────────
	if (canHover) document.querySelectorAll<HTMLElement>("[data-magnetic]").forEach((btn) => {
		btn.addEventListener("mousemove", (e) => {
			const rect = btn.getBoundingClientRect();
			const x = e.clientX - rect.left - rect.width / 2;
			const y = e.clientY - rect.top - rect.height / 2;
			gsap.to(btn, {
				x: x * 0.35, y: y * 0.35,
				duration: 0.4, ease: "power3.out",
				overwrite: "auto",
			});
		});
		btn.addEventListener("mouseleave", () => {
			gsap.to(btn, {
				x: 0, y: 0,
				duration: 0.6,
				ease: "elastic.out(1, 0.35)",
				overwrite: "auto",
			});
		});
	});
}

// Hand over from the CSS pre-hide to GSAP's inline states
document.documentElement.classList.add("gsap-ready");
