import React, { useState, useEffect } from 'react';
import { requestCharacters } from '../../helpers/api'
import './PovCharacters.css'
import { LinearProgress } from '@material-ui/core';

interface CharProps {
  url: string,
};

export const PovCharacters: React.FC<CharProps> = ({ url }) => {
   const [character, setCharacter]: any = useState([])
   const [loading, setLoading]: any = useState(true)

  useEffect(() => {
      requestCharacters(url)
      .then(response => setCharacter(response))
      .then(() => setLoading(false))
  }, [url]);

  console.log(character)

  return (
    <>
      {
        loading
          ? <LinearProgress />
          : <ul>
              <li className="character">{character.name}
                <div className="character_info">
                  <p>{`Gender: ${character.gender}`}</p>
                  <p>{`Culture: ${character.culture}`}</p>
                  <p>{`Born: ${character.born}`}</p>
                  <p>{`Died: ${character.died ? character.died : '-'}`}</p>
                </div>
              </li>
            </ul>
      }
    </>
  )
}
