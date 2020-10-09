import React from 'react';
import CharCell from './CharCell';
import './styles/CharList.css';
import { charClasses } from '../charClasses';

const CharList = () => {
    const { id, sprite } = charClasses;
    const cells = charClasses.map(charClass => {
        return (
            <CharCell 
            key={id}
            charClass={charClass}
            />
        );
    });

    return (
        <section className="char-list">
            {cells}
        </section>
    )
}

export default CharList;