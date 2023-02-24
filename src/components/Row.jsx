import axios from 'axios'
import { useState, useEffect } from 'react'
import Movie from './Movie'
import {MdChevronRight, MdChevronLeft} from 'react-icons/md'

const Row = ({title, fetchUrl, RowID}) => {
const [movies,setMovies] = useState([])

const slideLeft = () =>{

    var slider = document.getElementById('slider' + RowID)
    slider.scrollLeft = slider.scrollLeft - 500;
}

const slideRight = () =>{

    var slider = document.getElementById('slider' + RowID)
    slider.scrollLeft = slider.scrollLeft + 500;
}


useEffect(()=>{
axios.get(fetchUrl).then((response)=>{
setMovies(response.data.results)
})
}, [fetchUrl])

return (
<>
    <h2 className="text-white font-bold md:text-xl p-4">{title}</h2>

    <div className="relative flex items-center group ">
          <MdChevronLeft onClick={slideLeft}  className="bg-white left-0 rounded-full absolute z-10 opacity-50 hover:opacity-100 cursor-pointer hidden group-hover:block  "  size={40} />
        <div id={'slider' + RowID}
            className="w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide relative ">
            {movies.map((item,id) => (
            <Movie item={item} key={id} />
            ))}
        </div>
              <MdChevronRight onClick={slideRight}  className='bg-white right-0  rounded-full absolute z-10 opacity-50 hover:opacity-100 cursor-pointer hidden group-hover:block ' size={40} />
    </div>
</>
)
}

export default Row