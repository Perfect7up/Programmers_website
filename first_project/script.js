  
  
  // script \\


  
  const codeElement = document.getElementById("code");
    const codeText = `for (let i = 0; i < 10; i++) {
  console.log("Loop iteration " + i);
    }`;
    let index = 0;

    function animateCode() {
      if (index < codeText.length) {
        codeElement.textContent += codeText.charAt(index);
        index++;
        setTimeout(animateCode, 100);
      }
    }

    animateCode();