import {books} from './books';

export interface Category {
  id: number;
  name: string;
  booksList: number[];
}

export const bookCategories: Category[] = [
  {
    id: 1,
    name: 'Көркем әдебиет',
    booksList: [5, 6, 7, 8, 9, 10, 11, 12, 13, 14]
  },

  {
    id: 2,
    name: 'Ғылыми әдебиет',
    booksList: [15, 16, 17, 18, 19, 20, 21, 22, 23, 24]
  },

  {
    id: 3,
    name: 'Қазақ әдебиеті шет тілдерде',
    booksList: [25, 26, 27, 28, 29, 30, 31, 32, 33, 34]
  },

  {
    id: 4,
    name: 'Балалар әдебиеті',
    booksList: [35, 36, 37, 38, 39, 40, 41, 42, 43, 44]
  },

  {
    id: 5,
    name: 'Әлем әдебиеті',
    booksList: [35, 36, 37, 38, 39, 40, 41, 42, 43, 44]
  }
];

export const allBooks = books;
