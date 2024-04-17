
import { scroll, animate } from "https://cdn.skypack.dev/motion"

const $cardsWrapper = document.querySelector('#cards');
const $cards = document.querySelectorAll('.cardy');

const numCards = $cards.length;

$cards.forEach(($card, index0) => {

	const index = index0 + 1;
	const reverseIndex = numCards - index0;
	const reverseIndex0 = numCards - index;

	// Extra padding per card, so you can see the other stacked cards underneath at the top
	$card.style.paddingTop = `calc(${index} * var(--card-top-offset))`;

	// Scroll-Linked Animation
	scroll(
		animate($card, {
			// Earlier cards shrink more than later cards
			scale: [ 1, 1 - (0.05 * reverseIndex0)],
			opacity: [ 1, 1 - (0.01 * reverseIndex0)],
		}), {
			// Each card should only shrink when it’s at the top.
			// We can’t use exit on the els for this (as they are sticky)
			// but can track $cardsWrapper instead.
			target: $cardsWrapper,
			offset: [`${index0 / numCards * 100}%`, `${index / numCards * 100}%`],
		}
	);
});

document.getElementById('myForm').addEventListener('submit', function() {
	// Show spinner
	document.getElementById('spinner').style.display = 'inline-block';
	// Disable submit button to prevent multiple submissions
	document.getElementById('submitButton').disabled = true;
  });


  //Datum / auf Anmeldung
  document.getElementById('date').addEventListener('keydown', function (e) {
	var target = e.target, position = target.selectionEnd, length = target.value.length;
	
	if (e.key === 'Backspace' && length === 3 && position === 3) {
	  target.value = target.value.slice(0, -1);
	}
  });
  
  document.getElementById('date').addEventListener('input', function (e) {
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
  
  
  
  
  
  