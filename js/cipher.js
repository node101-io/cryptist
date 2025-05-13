window.addEventListener('load', () => {
  const elementsToCipher = document.querySelectorAll(".animate-cipher");
  const elementsToStartCipher = document.querySelectorAll(".animate-cipher-on-start");
  
  const fullDuration = 700;
  const letterChangeDuration = 50;
  const randomChars = [...'~!@#$%^&*()-_=+[]{}\\|;:\'",.<>/?€£¥¿µabcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'];

  const applyCipherAnimation = (element, autoStart = false, enableHover = true) => {
    let interval = null;
    let deciphering = false;
    let elapsedTime = 0;
    let originalText = '';
    let originalArray = [];
    let cipheredIndices = new Set();
    let availableIndices = [];

    const updateText = () => {
      if (!originalArray.length) return;

      const resultArray = [...originalArray];
      cipheredIndices.forEach(index => {
        resultArray[index] = randomChars[Math.floor(Math.random() * randomChars.length)];
      });

      element.textContent = resultArray.join('');
    };

    const startDeciphering = () => {
      deciphering = true;
      elapsedTime = 0;
    };

    const resetAnimation = () => {
      clearInterval(interval);
      interval = null;
      element.textContent = originalText;
      element.dataset.animating = 'false';
      cipheredIndices.clear();
      availableIndices = [];
    };

    const startCipherAnimation = () => {
      if (element.dataset.animating === 'true') return;

      originalText = element.textContent;
      originalArray = originalText.split('');
      element.dataset.animating = 'true';
      elapsedTime = 0;
      deciphering = false;
      cipheredIndices.clear();

      availableIndices = [];
      for (let i = 0; i < originalText.length; i++)
        if (originalText[i] !== ' ')
          availableIndices.push(i);

      availableIndices.sort(() => Math.random() - 0.5);

      if (interval) clearInterval(interval);

      const textLength = availableIndices.length;
      if (textLength === 0) {
        resetAnimation();
        return;
      }

      interval = setInterval(() => {
        elapsedTime += letterChangeDuration;
        const progress = Math.min(1, elapsedTime / fullDuration);

        if (!deciphering) {
          const targetCount = Math.floor(progress * textLength);

          while (cipheredIndices.size < targetCount && availableIndices.length > 0)
            cipheredIndices.add(availableIndices.pop());

          if (progress >= 1)
            startDeciphering();
        } else {
          const targetCount = Math.floor((1 - progress) * textLength);

          if (cipheredIndices.size > targetCount) {
            const indicesArray = Array.from(cipheredIndices);
            const indexToRemove = indicesArray[Math.floor(Math.random() * indicesArray.length)];
            cipheredIndices.delete(indexToRemove);
          }

          if (progress >= 1) {
            resetAnimation();
            return;
          }
        }

        updateText();
      }, letterChangeDuration);
    };

    if (enableHover) {
      element.addEventListener('mouseover', startCipherAnimation);

      element.addEventListener('mouseout', () => {
        if (element.dataset.animating === 'true' && interval)
          startDeciphering();
      });
    }
    
    if (autoStart) {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            startCipherAnimation();
            observer.unobserve(entry.target);
          }
        });
      }, {
        threshold: 0.1
      });
      
      observer.observe(element);
    }
  };

  elementsToCipher.forEach(element => {
    applyCipherAnimation(element, false, true);
  });
  
  elementsToStartCipher.forEach(element => {
    const enableHover = element.classList.contains('animate-cipher');
    applyCipherAnimation(element, true, enableHover);
  });
});
