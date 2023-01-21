import { createElement } from "../createElement";
import { TITLE } from '../const';

const container = createElement('div', 
  {
    className: 'container',
  }
);

const content = createElement('div', 
  {
    className: 'hero__content',
  },
  {
    parent:  container,
  },
);

const titleElem = createElement('h2',
  {
    className: 'hero__title',
    textContent: 'Новая коллекция Бюстгальтер-балконет'
  },
  {
    parent: content,
  }
);
const heroLink = createElement('a',
  {
    className: 'hero__link',
    textContent: 'Перейти',
  },
  {
    parent: content,
  }
)

export const renderHero = (gender) => {
  const hero = document.querySelector('.hero');

  if (!gender) {
    hero.style.display = 'none';
    return;
  }

  hero.textContent = '';
  hero.style.display = '';
  hero.className = `hero hero__${gender}`;
  hero.append(container);
  titleElem.textContent = TITLE[gender].title;
  heroLink.href = `#/product/${TITLE[gender].id}`;
};