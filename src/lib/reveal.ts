import type { Attachment } from 'svelte/attachments';

/**
 * Fades an element up the first time it scrolls into view: `{@attach reveal()}`.
 * Anything already on screen when the page loads is left alone, so nothing flickers, and
 * without JavaScript or with reduced motion everything simply shows.
 */
export function reveal(delay = 0): Attachment<HTMLElement> {
	return (node) => {
		if (matchMedia('(prefers-reduced-motion: reduce)').matches) return;
		if (node.getBoundingClientRect().top < innerHeight) return;

		node.classList.add('reveal');
		node.style.transitionDelay = `${delay}ms`;
		const observer = new IntersectionObserver(
			([entry]) => {
				if (!entry.isIntersecting) return;
				node.classList.add('revealed');
				observer.disconnect();
			},
			{ rootMargin: '0px 0px -8% 0px' }
		);
		observer.observe(node);
		return () => observer.disconnect();
	};
}
