import {  useContext } from 'react'
import { Button } from './Button';
import globalContext from '../globalContext';


interface Genre {
  id: number;
  name: 'action' | 'comedy' | 'documentary' | 'drama' | 'horror' | 'family';
  title: string;
}

interface ISidebarProps {
  genres:Genre[]
}

interface IGlobalContext{
  selectedGenreId: number,
  setSelectedGenreId:  (id: number) => void;
}

export function SideBar({genres}:ISidebarProps ) {

  const { selectedGenreId, setSelectedGenreId} = useContext<IGlobalContext>(globalContext)

  function handleClickButton(id: number) {
    setSelectedGenreId(id);
  }

 return (
  <nav className="sidebar">

    <span>Watch<p>Me</p></span>

    <div className="buttons-container">
      {genres.map((genre: Genre)  => (
        <Button
          key={String(genre.id)}
          title={genre.title}
          iconName={genre.name}
          onClick={() => handleClickButton(genre.id)}
          selected={selectedGenreId === genre.id}
        />
      ))}
    </div>

</nav>
 )
}