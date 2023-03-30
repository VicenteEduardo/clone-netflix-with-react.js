import React, { useState } from "react";
import './MovieRow.css'
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
export default ({ title, items }) => {

    const [scrollX, setScrollX] = useState(-10)
    const handleLeft = () => {
        let x = scrollX + Math.round(window.innerWidth / 2);
        if (x > 0) {
            x = 0
        }
        setScrollX(x)
    }
    const handleRigth = () => {
        let x = scrollX - Math.round(window.innerWidth / 2);
        let listw = items.results.length * 150;

        if ((window.innerWidth - listw) > x) {
            x = (window.innerWidth - listw) - 1;
        }

        setScrollX(x)
    }
    return (
        <div className="movieRow">
            <h2>    {title}
            </h2>
            <div className="movie-left" onClick={handleLeft}>
                <NavigateBeforeIcon style={{ fontSize: 50 }} />
            </div>
            <div className="movie-rigth" onClick={handleRigth}>
                <NavigateNextIcon style={{ fontSize: 50 }} />
            </div>

            <div className="movieRow-listarea">
                <div className="moviewRow-list" style={{
                    marginLeft: scrollX,
                    width: items.results.length * 150
                }}  >

                    {items.results.length > 0 && items.results.map((item, key) => (
                        <div key={key} className="movieRow--item">
                            <img src={`https://image.tmdb.org/t/p/w500/${item.poster_path}`} />
                        </div>



                    ))}
                </div>

            </div>
        </div>
    )
}