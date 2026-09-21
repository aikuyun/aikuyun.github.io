(() => {
  const typingText = document.querySelector("[data-typing]");

  if (!typingText) return;

  const phrases = typingText.dataset.phrases
    .split("|")
    .map((phrase) => phrase.trim())
    .filter(Boolean);
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

  if (phrases.length === 0 || reduceMotion.matches) {
    typingText.textContent = phrases[0] || typingText.textContent;
    return;
  }

  const TYPE_DELAY = 105;
  const DELETE_DELAY = 55;
  const COMPLETE_PAUSE = 1300;
  const EMPTY_PAUSE = 350;
  let phraseIndex = 0;
  let characterIndex = 0;
  let deleting = false;
  let timerId;

  const schedule = (delay) => {
    window.clearTimeout(timerId);
    timerId = window.setTimeout(updateText, delay);
  };

  const updateText = () => {
    if (reduceMotion.matches) {
      typingText.textContent = phrases[0];
      return;
    }

    const phrase = phrases[phraseIndex];

    if (deleting) {
      characterIndex -= 1;
      typingText.textContent = phrase.slice(0, characterIndex);

      if (characterIndex === 0) {
        deleting = false;
        phraseIndex = (phraseIndex + 1) % phrases.length;
        schedule(EMPTY_PAUSE);
        return;
      }

      schedule(DELETE_DELAY);
      return;
    }

    characterIndex += 1;
    typingText.textContent = phrase.slice(0, characterIndex);

    if (characterIndex === phrase.length) {
      deleting = true;
      schedule(COMPLETE_PAUSE);
      return;
    }

    schedule(TYPE_DELAY);
  };

  typingText.textContent = "";
  schedule(520);

  reduceMotion.addEventListener("change", (event) => {
    window.clearTimeout(timerId);
    typingText.textContent = phrases[0];

    if (!event.matches) {
      phraseIndex = 0;
      characterIndex = 0;
      deleting = false;
      typingText.textContent = "";
      schedule(520);
    }
  });
})();
