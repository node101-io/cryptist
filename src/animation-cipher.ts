window.addEventListener("load", () => {
  const elementsToCipher =
    document.querySelectorAll<HTMLElement>(".animate-cipher");
  const elementsToStartCipher = document.querySelectorAll<HTMLElement>(
    ".animate-cipher-on-start"
  );

  const fullDuration = 700;
  const letterChangeDuration = 50;
  const randomChars = [
    ..."~!@#$%^&*()-_=+[]{}\\|;:'\",.<>/?€£¥¿µabcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789",
  ];

  const applyCipherAnimation = (
    element: HTMLElement,
    autoStart = false,
    enableHover = true,
    finalText?: string
  ) => {
    let interval: number | null = null;
    let deciphering = false;
    let elapsedTime = 0;
    let originalText = "";
    let originalArray: string[] = [];
    let cipheredIndices = new Set<number>();
    let availableIndices: number[] = [];
    let wasInterrupted = false;

    const updateText = () => {
      if (!originalArray.length) return;

      const targetText = deciphering ? finalText || originalText : originalText;
      const targetArray = targetText.split("");

      let resultArray: string[];

      if (deciphering && finalText) {
        // Decipher sırasında final text'e smooth dönüşüm
        const decipherProgress = Math.min(1, elapsedTime / fullDuration);
        const targetLength = targetArray.length;
        const originalLength = originalText.length;

        // Uzunluk interpolasyonu
        const currentLength = Math.round(
          originalLength + (targetLength - originalLength) * decipherProgress
        );

        // Array boyutunu ayarla
        if (currentLength > originalLength) {
          resultArray = [...originalArray];
          for (let i = originalLength; i < currentLength; i++) {
            resultArray.push(" ");
          }
        } else {
          resultArray = originalArray.slice(0, currentLength);
        }

        // Harfleri güncelle
        for (let i = 0; i < resultArray.length; i++) {
          if (cipheredIndices.has(i)) {
            // Bu harf decipher edildi, final text'ten al
            if (i < targetArray.length) {
              resultArray[i] = targetArray[i];
            } else {
              resultArray[i] = " ";
            }
          } else {
            // Henüz decipher edilmedi, rastgele karakter
            resultArray[i] =
              randomChars[Math.floor(Math.random() * randomChars.length)];
          }
        }
      } else {
        // Normal cipher/decipher (orijinal text'e)
        resultArray = [...originalArray];
        cipheredIndices.forEach((index) => {
          if (index < resultArray.length) {
            if (deciphering) {
              resultArray[index] = originalArray[index];
            } else {
              resultArray[index] =
                randomChars[Math.floor(Math.random() * randomChars.length)];
            }
          }
        });
      }

      element.textContent = resultArray.join("");
    };

    const startDeciphering = () => {
      deciphering = true;
      elapsedTime = 0;
    };

    const resetAnimation = (useOriginalText = false) => {
      if (interval) clearInterval(interval);
      interval = null;
      element.textContent =
        useOriginalText || wasInterrupted
          ? originalText
          : finalText || originalText;
      element.dataset.animating = "false";
      cipheredIndices.clear();
      availableIndices = [];
      wasInterrupted = false;
    };

    const startCipherAnimation = () => {
      if (element.dataset.animating === "true") return;

      originalText = element.textContent || "";
      originalArray = originalText.split("");
      element.dataset.animating = "true";
      elapsedTime = 0;
      deciphering = false;
      wasInterrupted = false;
      cipheredIndices.clear();

      const targetText = finalText || originalText;
      const maxLength = Math.max(originalText.length, targetText.length);

      availableIndices = [];
      for (let i = 0; i < maxLength; i++)
        if (
          (i < originalText.length && originalText[i] !== " ") ||
          (i < targetText.length && targetText[i] !== " ")
        )
          availableIndices.push(i);

      availableIndices.sort(() => Math.random() - 0.5);

      if (interval) clearInterval(interval);

      const textLength = availableIndices.length;
      if (textLength === 0) {
        resetAnimation(true);
        return;
      }

      interval = setInterval(() => {
        elapsedTime += letterChangeDuration;
        const progress = Math.min(1, elapsedTime / fullDuration);

        if (!deciphering) {
          const targetCount = Math.floor(progress * textLength);

          while (
            cipheredIndices.size < targetCount &&
            availableIndices.length > 0
          )
            cipheredIndices.add(availableIndices.pop()!);

          if (progress >= 1) startDeciphering();
        } else {
          const targetCount = Math.floor((1 - progress) * textLength);

          while (
            cipheredIndices.size > targetCount &&
            cipheredIndices.size > 0
          ) {
            const indicesArray = Array.from(cipheredIndices);
            const indexToRemove =
              indicesArray[Math.floor(Math.random() * indicesArray.length)];
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
      element.addEventListener("mouseover", startCipherAnimation);

      element.addEventListener("mouseout", () => {
        if (element.dataset.animating === "true" && interval) {
          wasInterrupted = true;
          startDeciphering();
        }
      });
    }

    if (autoStart) {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              startCipherAnimation();
              observer.unobserve(entry.target);
            }
          });
        },
        {
          threshold: 0.1,
        }
      );

      observer.observe(element);
    }
  };

  elementsToCipher.forEach((element) => {
    const finalText = element.dataset.finalText;
    applyCipherAnimation(element, false, true, finalText);
  });

  elementsToStartCipher.forEach((element) => {
    const enableHover = element.classList.contains("animate-cipher");
    const finalText = element.dataset.finalText;
    applyCipherAnimation(element, true, enableHover, finalText);
  });
});
