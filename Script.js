@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&display=swap");
:root {
  --header-height: 3rem;
  --font-semi: 600;

  --hue-color: 224;
  --first-color: hsl(var(--hue-color), 89%, 60%);
  --second-color: hsl(var(--hue-color), 56%, 12%);
  --body-font: 'Poppins', sans-serif;
  --big-font-size: 2rem;
  --h2-font-size: 1.25rem;
  --normal-font-size: .938rem;
  --smaller-font-size: .75rem;
  --mb-2: 1rem;
  --mb-4: 2rem;
  --mb-5: 2.5rem;
  --mb-6: 3rem;
  --z-back: -10;
  --z-fixed: 100;
}

@media screen and (min-width: 968px) {
  :root {
    --big-font-size: 3.5rem;
    --h2-font-size: 2rem;
    --normal-font-size: 1rem;
    --smaller-font-size: .875rem;
  }
}

/*===== BASE =====*/
*, ::before, ::after {
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
}


  

h1, h2, p {
  margin: 0;
}

ul {
  margin: 0;
  padding: 0;
  list-style: none;
}

a {
  text-decoration: none;
}

img {
  max-width: 100%;
  height: auto;
  display: block;
}

/*===== CLASS CSS ===== */
.section-title {
  position: relative;
  font-size: var(--h2-font-size);
  color: var(--first-color);
  margin-top: var(--mb-2);
  margin-bottom: var(--mb-4);
  text-align: center;
}

.section-title::after {
  position: absolute;
  content: '';
  width: 64px;
  height: 0.18rem;
  left: 0;
  right: 0;
  margin: auto;
  top: 2rem;
  background-color: var(--first-color);
}

.section {
  padding-top: 3rem;
  padding-bottom: 2rem;
}
/*===== LAYOUT =====*/
.bd-grid {
    max-width: 1024px;
    display: grid;
    margin-left: var(--mb-2);
    margin-right: var(--mb-2);
  }
  
  .l-header {
    width: 100%;
    position: fixed;
    top: 0;
    left: 0;
    z-index: var(--z-fixed);
    background-color: #ffffff;
    box-shadow: 0 1px 4px rgba(187, 3, 3, 0.15);
  }
  
  /*===== NAV =====*/
  .nav {
    height: var(--header-height);
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-weight: var(--font-semi);
  }
  
  @media screen and (max-width: 767px) {
    .nav__menu {
      position: fixed;
      top: var(--header-height);
      right: -100%;
      width: 80%;
      height: 100%;
      padding: 2rem;
      background-color: var(--second-color);
      transition: .5s;
    }
  }
  
  .nav__item {
    margin-bottom: var(--mb-4);
  }
  
  .nav__link {
    position: relative;
    color: #fff;
  }
  
  .nav__link:hover {
    position: relative;
  }
  
  .nav__link:hover::after {
    position: absolute;
    content: '';
    width: 100%;
    height: 0.18rem;
    left: 0;
    top: 2rem;
    background-color: var(--first-color);
  }
  
  .nav__logo {
    color: var(--second-color);
  }
  
  .nav__toggle {
    color: var(--second-color);
    font-size: 1.5rem;
    cursor: pointer;
  }
  
  /*Active menu*/
  .active::after {
    position: absolute;
    content: '';
    width: 100%;
    height: 0.18rem;
    left: 0;
    top: 2rem;
    background-color: var(--first-color);
  }
  
  /*=== Show menu ===*/
  .show {
    right: 0;
  }
  
  /*===== HOME =====*/
  .home {
    position: relative;
    row-gap: 5rem;
    padding: 4rem 0 5rem;
  }
  
  .home__data {
    align-self: center;
  }
  
  .home__title {
    font-size: var(--big-font-size);
    margin-bottom: var(--mb-5);
  }
  
  .home__title-color {
    color:yellow;
  }
  
  .home__social {
    display: flex;
    flex-direction: column;
  }
  
  .home__social-icon {
    width: max-content;
    margin-bottom: var(--mb-2);
    font-size: 1.5rem;
    color: var(--second-color);
  }
  
  .home__social-icon:hover {
    color: var(--first-color);
  }
  
  .home__img {
    position: absolute;
    right: 0;
    bottom: 0;
    width: 20px;
    
  }
  
  .home__blob {
    fill: var(--first-color);
  }
  
  .home__blob-img {
    width: 360px;
  }
  
  
  
  /*BUTTONS*/
  .button {
    display: inline-block;
    background-color:rgb(242, 98, 2);
    color: #ffffff;
    padding: .75rem 2.5rem;
    font-weight: var(--font-semi);
    border-radius: .5rem;
    transition: .3s;
  }
  
  .button:hover {
    box-shadow: 0px 10px 36px rgba(0, 0, 0, 0.15);
  }
  
  /* ===== ABOUT =====*/
  .about__container {
    row-gap: 2rem;
    text-align: center;
  }
  
  .about__subtitle {
    margin-bottom: var(--mb-2);
  }
  
  .about__img {
    justify-self: center;
  }
  
  .about__img img {
    width: 200px;
    border-radius: .5rem;
  }
  
  /* ===== Projects =====*/
  .Projects__container {
    row-gap: 2rem;
    text-align: center;
  }
  
  .Projects__subtitle {
    margin-bottom: var(--mb-2);
  }
  
  .Projects__text {
    margin-bottom: var(--mb-4);
  }
  
  .Projects__data {
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;
    font-weight: var(--font-semi);
    padding: .5rem 1rem;
    margin-bottom: var(--mb-4);
    border-radius: .5rem;
    box-shadow: 0px 4px 25px rgba(14, 36, 49, 0.15);
  }
  
  .Projects__icon {
    font-size: 2rem;
    margin-right: var(--mb-2);
    color: var(--first-color);
  }
  
  .Projects__names {
    display: flex;
    align-items: center;
  }
  
  .Projects__bar {
    position: absolute;
    left: 0;
    bottom: 0;
    background-color: var(--first-color);
    height: .25rem;
    border-radius: .5rem;
    z-index: var(--z-back);
  }
  
  .Projects__abstract {
    width: 1%;
  }
  
  .Projects__bubblesort {
    width: 2%;
  }
  
  .Projects__bankaccount {
    width: 3%;
  }
  
  .Projects__encapsulation {
    width: 4%;
  }
  
  .Projects__student {
      width: 5%;
    }
    
    .Projects__inheritance {
      width: 6%;
    }
    
    .Projects__polymorphism {
      width: 7%;
    }
    
    .Projects__arraysort {
      width: 8%;
  
    }.Projects__lamp {
      width: 9%;
    }
    
    .Projects__employee {
      width: 10%;
    }
    
    .Projects__instructor {
      width: 11%;
    }
    
    .Projects__basicoop {
      width: 12%;
    }
  .Projects__img {
    border-radius: .5rem;
  }
  
  
  .repository-item {
      text-align: center;
  }
  
  .repository-item img {
      max-width: 100%;
      height: auto;
      margin-bottom: 10px;
  }