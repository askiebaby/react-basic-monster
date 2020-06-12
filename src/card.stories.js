import React from 'react';
import { Card } from './components/card/card.component';
export default { title: 'Card' };

export const MonsterCard = () => (
  <Card monster={{ id: '500', name: 'Askie', email: 'askie@yahoo.com' }} />
);
