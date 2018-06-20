import React from 'react';
import {sculptures} from '../fixture'
import Gallery from './Gallery'

export default function Sculptures () {
        return (
            <Gallery images={sculptures}/>
        )
    }