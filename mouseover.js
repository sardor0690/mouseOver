class HeaderContent {
    constructor() {
      this.element = document.querySelector('.header__content');
      this.containerWidth = 1400; 
      this.containerHeight = 650;
      this.elementWidth = this.element.offsetWidth;
      this.elementHeight = this.element.offsetHeight;
      this.firstHover = true; // Bu birinchi marta kursor `.header__content` ustiga kelishini aniqlash uchun
      this.element.addEventListener('mouseover', this.moveHeaderContent.bind(this));
    }
  
    moveHeaderContent() {

      const maxX = this.containerWidth - this.elementWidth,
            maxY = this.containerHeight - this.elementHeight,
            randomX = Math.floor(Math.random() * maxX),
            randomY = Math.floor(Math.random() * maxY);
  
      this.element.style.position = 'absolute';
      const vaqt = 100,
            startLeft = parseInt(this.element.style.left || 100),
            startTop = parseInt(this.element.style.top || 110),
            changeX = randomX - startLeft,
            changeY = randomY - startTop,
            startTime = performance.now();
      
      // Animatsiya jarayoni
      const ani = (currentTime) => {
        const otganVaqt = currentTime - startTime;
        if (otganVaqt < vaqt) {
          const progress = otganVaqt / vaqt,
                newX = startLeft + (changeX * progress),
                newY = startTop + (changeY * progress);
                this.element.style.left = newX + 'px';
                this.element.style.top = newY + 'px';
          requestAnimationFrame(ani);
        } else {
          this.element.style.left = randomX + 'px';
          this.element.style.top = randomY + 'px';
        }
      };
      
      requestAnimationFrame(ani);
    }
  }
  
  const headerContent = new HeaderContent();
