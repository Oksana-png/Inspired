import { getData } from '../getData';
import { API_URL } from '../const'
import { createElement } from '../createElement';
import { DATA } from '../const';


export const renderProducts = async (title, params) => {
  const products = document.querySelector('.goods');
  
  products.textContent = '';
  
  const goods = await getData(`${API_URL}/api/goods`, params);
  
  const container = createElement('div',
    {
      className: 'container',
    },
    {
      parent: products,
    }
  );

  createElement('h2',
    {
      className: 'goods__title',
      textContent: title,
    },
    {
      parent: container,
    }
  );

  const listCard = goods.map((product) => {
    console.log(product);
    const li = createElement('li',
      {
        className: 'goods__item',
      },
    );

    const article = createElement('article',
      {
        className: 'product',
        innerHTML: `
          <a href="#/product/${product.id}" class="product__link">
            <img src="${API_URL}/${product.pic}" alt="${product.title}" class="product__image">
            <h3 class="product__title">${product.title}</h3>
          </a>
          <div class="product__row">
            <p class="product__price">руб ${product.price}</p>
            <button 
              class="product__btn-favorite" 
              aria-label="Добавить в избранное"
              data-id="${product.id}">
            </button>
          </div>
        `
      },
      {
        parent: li,
      }
    );
    const colors = createElement('ul',
      {
        className: 'product__color-list',
      },
      {
        parent: article,
        appends: product.colors.map((colorId, i) => {
          const color = DATA.colors.find(item => item.id == colorId)
          return createElement('li',
            {
              className: `color color--${color.title} ${i ? '' : 'color--check'}`,
            },
          );
        }),
      }
    );

    return li;
  });

  const list = createElement('ul',
    {
      className: 'goods__list',
    },
    {
      appends: listCard,
      parent: container,
    }
  );

  // products.innerHTML += `
  //   <ul class="product__color-list">
  //     <li class="product__color-item">
  //       <div class="color color--red color--check"></div>
  //     </li>
  //     <li class="product__color-item">
  //       <div class="color color--white"></div>
  //     </li>
  //     <li class="product__color-item">
  //       <div class="color color--black"></div>
  //     </li>
  //   </ul>
  // `;
};