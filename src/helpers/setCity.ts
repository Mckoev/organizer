import { FormEvent } from 'react';
import { CITY } from 'api/weather/weatherApiData';

export function setCity(e: FormEvent<HTMLFormElement>, city: string): void {
    localStorage.setItem(CITY, city);
}
