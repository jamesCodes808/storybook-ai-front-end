import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Image } from '@chakra-ui/react'


const Pages = (props) => {
    const story = props.story;
    const listOfPages = story.split('. ');
    const cover = props.cover;

    console.log(listOfPages)

    return (
        <>
            <Carousel infiniteLoop showThumbs={false}>
                <Image
                    src={`data:image/png;base64, ${cover}`}
                    height="auto"
                    width="800px">
                </Image>
                {listOfPages.map((page) => {
                    return <p>{page}</p>
                })}
            </Carousel>
        </>
    )

}

export default Pages;