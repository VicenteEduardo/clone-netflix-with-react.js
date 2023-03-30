
import './App.css';
import Tmbdb from './Tmbdb';
import MovieRow from './components/MovieRow';
import FeaturedMovie from './components/FeaturedMovie';
import { useEffect, useState } from 'react';
import Header from './components/Header';
function App() {
  const [movieList, setMovieList] = useState([]);
  const [featureData, setFeatureData] = useState(null)
  const [blackHeader, setBlackHeader] = useState(false)
  useEffect(() => {
    const loadAll = async () => {
      //pegar os filmes 
      let list = await Tmbdb.getHomeList();
      setMovieList(list)
      //pegando o featured
      let originals = list.filter(i => i.slug === 'originals');
      let radomChosen = Math.floor(Math.random() * (originals[0].items.results.length - 1));
      let chosen = originals[0].items.results[radomChosen];
      let choseInfo = await Tmbdb.getMovieInfo(chosen.id, 'tv');
      setFeatureData(choseInfo)
    }
    loadAll();
  }, []);

  useEffect(() => {
    const scrollLister = () => {
      if (window.scrollY > 10) {
        setBlackHeader(true)
      }
      else {
        setBlackHeader(false)
      }
    }

    window.addEventListener('scroll', scrollLister);
    return () => {
      window.removeEventListener('scroll', scrollLister)
    }
  }, [])
  return (

    <div className="list">
      <Header black={blackHeader} />
      {featureData && <FeaturedMovie item={featureData} />}

      <section>
        {movieList.map((item, key) => (
          <MovieRow title={item.title} key={key} items={item.items} />
        ))}
      </section>
      <footer>
        feito com <span role="img" aria-label='coração'> React.js</span>
      </footer>
      {movieList.length <= 0 && <div className='load'>

        <img src='load.gif' />
      </div>}

    </div>
  );
}

export default App;
