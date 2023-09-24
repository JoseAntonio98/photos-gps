import { Geolocation, Position } from '@capacitor/geolocation';
import { useState } from 'react';

export interface coordinate {
    latitude: number;
    longitude: number;
}

export function usePosition () {

    const [ coordinates, setCoordinates ] = useState<coordinate>()

    const getCurrentPosition = async () => {
        const coordinates = await Geolocation.getCurrentPosition()
        setCoordinates({
            latitude: coordinates.coords.latitude,
            longitude: coordinates.coords.longitude
        })
    }

    return {
        coordinates,
        getCurrentPosition
    }
}