import {INITIAL_CITY, INITIAL_LOCATION} from "./API";

export const CITY: string = 'city'
export const LOCATION: string = 'location'

export function getLocalStorage(location: string): string | null {
        return localStorage.getItem(location)

}

export function setLocalStorage(type: string, newLocation: string ): void {
    localStorage.setItem(type, newLocation)
}
