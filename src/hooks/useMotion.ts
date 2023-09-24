import { PluginListenerHandle } from '@capacitor/core';
import { Motion } from '@capacitor/motion';
import { useState } from 'react';

export interface accelModel {
    x: number;
    y: number;
    z: number
}

export function useMotion () {

    const [ accelHandler, setAccelHandler ] = useState<PluginListenerHandle>()
    const [ accel, setAccel ] = useState<accelModel>()

    const getListenerAccel = async () => {   
        // Once the user approves, can start listening:
        let accelHandlerTmp = await Motion.addListener('accel', event => {
            //console.log('Device motion event:', event);
            setAccel({
                x: event.acceleration.x,
                y: event.acceleration.y,
                z: event.acceleration.z
            })
        });
        setAccelHandler(accelHandlerTmp)
    }

    // Stop the acceleration listener
    const stopAcceleration = () => {
      if (accelHandler) {
        accelHandler.remove();
      }
    };
    
    // Remove all listeners
    const removeListeners = () => {
      Motion.removeAllListeners();
    };

    return {
        accel,
        getListenerAccel,
        stopAcceleration,
        removeListeners
    }
}