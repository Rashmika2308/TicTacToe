import './image.css';
import cat1 from './images/cat.jpg';
import cat2 from './images/cat1.jpg';
import cat3 from './images/cat2.jpg';
function Image()
{
    return(
        <>
        <img src={cat1} alt="no image found" class="imageone"/>
        <img src={cat2} alt="no image found" class="imagetwo"/>
        <img src={cat3} alt="no image found" class="imagethree"/>
        </>
    )
}
export default Image;