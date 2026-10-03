// Stapel-Animation für "Unsere letzten Events" (ohne externe Bibliothek)
const $cardsWrapper = document.querySelector('#cards');
const $cards = Array.from(document.querySelectorAll('.cardy'));
const numCards = $cards.length;

if ($cardsWrapper && numCards > 0) {
	$cards.forEach(($card, index0) => {
		// Extra padding per card, so you can see the other stacked cards underneath at the top
		$card.style.paddingTop = `calc(${index0 + 1} * var(--card-top-offset))`;
	});

	const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
	let ticking = false;

	const update = () => {
		ticking = false;
		if (reduceMotion.matches) return;

		// 0 = Anfang der Liste ist oben angekommen, 1 = Ende der Liste ist oben angekommen
		const rect = $cardsWrapper.getBoundingClientRect();
		const progress = Math.max(0, Math.min(1, -rect.top / rect.height));

		$cards.forEach(($card, index0) => {
			const reverseIndex0 = numCards - (index0 + 1);
			// Each card should only shrink while it is the one at the top.
			const start = index0 / numCards;
			const local = Math.max(0, Math.min(1, (progress - start) * numCards));
			// Earlier cards shrink more than later cards
			$card.style.transform = `scale(${1 - 0.05 * reverseIndex0 * local})`;
			$card.style.opacity = 1 - 0.01 * reverseIndex0 * local;
		});
	};

	window.addEventListener('scroll', () => {
		if (!ticking) {
			ticking = true;
			requestAnimationFrame(update);
		}
	}, { passive: true });
	window.addEventListener('resize', update);
	update();
}

// Formulare: Spinner beim Absenden
const $form = document.getElementById('myForm');
if ($form) {
	$form.addEventListener('submit', function () {
		const $spinner = document.getElementById('spinner');
		const $submit = document.getElementById('submitButton');
		// Show spinner
		if ($spinner) $spinner.style.display = 'inline-block';
		// Disable submit button to prevent multiple submissions
		if ($submit) $submit.disabled = true;
	});
}

// Datum / auf Anmeldung
const $date = document.getElementById('date');
if ($date) {
	$date.addEventListener('keydown', function (e) {
		var target = e.target, position = target.selectionEnd, length = target.value.length;

		if (e.key === 'Backspace' && length === 3 && position === 3) {
			target.value = target.value.slice(0, -1);
		}
	});

	$date.addEventListener('input', function (e) {
		var target = e.target, position = target.selectionEnd, length = target.value.length;

		if (length === 2 && position === 2 && target.value.indexOf('/') === -1) {
			target.value += '/';
		} else if (length < 3 && target.value.indexOf('/') !== -1) {
			target.value = target.value.replace('/', '');
		} else if (length > 2 && target.value.lastIndexOf('/') !== 2) {
			target.value = target.value.substring(0, 2) + '/' + target.value.substring(3).replace('/', '');
		} else if (length > 7) {
			target.value = target.value.substring(0, 7);
		}
	});
}
