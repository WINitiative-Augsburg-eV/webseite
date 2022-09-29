import "https://rawcdn.githack.com/flackr/scroll-timeline/ca40d920073ab1c3775f6e2aa973c6ea747ae664/dist/scroll-timeline.js";

// The one from https://github.com/flackr/scroll-timeline/pull/74
// import "https://raw.githack.com/flackr/scroll-timeline/22ae0525a8044a54e6d0aa593695b2a042e8de2a/dist/scroll-timeline.js";

const $cardsWrapper = document.querySelector('#cards');
const $cards = document.querySelectorAll('.cardy');

const numCards = $cards.length;

// Each card should only shrink when it’s at the top.
// We can’t use exit on the els for this (as they are sticky)
// but can track $cardsWrapper instead.
const viewTimeline = new ViewTimeline({
	subject: $cardsWrapper,
	axis: 'block',
});

$cards.forEach(($card, index0) => {

	const index = index0 + 1;
	const reverseIndex = numCards - index0;
	const reverseIndex0 = numCards - index;

	// Extra padding per card, so you can see the other stacked cards underneath at the top
	$card.style.paddingTop = `calc(${index} * var(--card-top-offset))`;

	// Scroll-Linked Animation
	$card.animate(
		{
			// Earlier cards shrink more than later cards
			transform: [ `scale(1)`, `scale(${1 - (0.1 * reverseIndex0)}`],
		},
		{
			timeline: viewTimeline,
			fill: 'forwards',
			// timeRange: `exit ${index0 / numCards * 100}% ${index / numCards * 100}%`,
			delay: { phase: "exit", percent: CSS.percent(index0 / numCards * 100) },
			endDelay: { phase: "exit", percent: CSS.percent(index / numCards * 100) },
			// delay: { phase: "contain", percent: CSS.percent(0) },
			// endDelay: { phase: "exit", percent: CSS.percent(100) },
			// timeRange: 'exit 0% 100%'
		}
	);
});
