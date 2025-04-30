
import { Supply } from '../types/gameTypes';

export const initialResources: Supply[] = [
  {
    id: 'energy',
    name: 'Energy',
    amount: 50,
    perSecond: 1,
    color: 'text-yellow-500'
  },
  {
    id: 'matter',
    name: 'Matter',
    amount: 25,
    perSecond: 0.5,
    color: 'text-slate-500'
  },
  {
    id: 'life',
    name: 'Life',
    amount: 10,
    perSecond: 0.2,
    color: 'text-green-500'
  },
  {
    id: 'technology',
    name: 'Technology',
    amount: 0,
    perSecond: 0.01,
    color: 'text-blue-500'
  }
];
