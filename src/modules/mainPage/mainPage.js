import { renderNavigation } from "../render/renderNavigation";
import { renderHero } from "../render/renderHero";
import { renderProducts } from "../render/renderProducts";
import { renderFooter } from '../render/renderFooter';

export const mainPage = (gender = 'women') => {
  renderNavigation(gender);
  renderHero(gender);
  renderProducts('НОВИНКИ', {gender});
  renderFooter();
}