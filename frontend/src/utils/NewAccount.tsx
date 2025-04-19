// src/utils/NewAccount.tsx
import type { JSX } from 'react';

// Se creo un objeto a partir de la fecha actual para generar los días del mes

const d = new Date();
const year = d.getFullYear();
const month = d.getMonth() + 1;
const day = d.getDate();

export function generateDays(): JSX.Element[] {
  const options = [<option key="" value="">{day}</option>];
  for (let i = 1; i <= 31; i++) {
    options.push(<option key={i} value={i}>{i}</option>);
  }
  return options;
}

export function generateMonths(): JSX.Element[] {
  const months = [
    'Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio',
    'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'
  ];
  const options = [<option key="" value="">{months[month-1]}</option>];
  months.forEach((month, index) => {
    options.push(<option key={index + 1} value={index + 1}>{month}</option>);
  });
  return options;
}

export function generateYears(startYear = 1920, endYear = new Date().getFullYear()): JSX.Element[] {
  const options = [<option key="" value="">{year}</option>];
  for (let i = endYear; i >= startYear; i--) {
    options.push(<option key={i} value={i}>{i}</option>);
  }
  return options;
}

  