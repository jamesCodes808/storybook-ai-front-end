import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Image } from '@chakra-ui/react'


const Pages = (props) => {
    /* const story = props.story;
    const listOfPages = story.split('. ');
    const cover = props.cover; */
    const pages = props.pages;

    console.log(pages);

    return (
        <>
            <Carousel infiniteLoop showThumbs={false}>
                {pages.map((page) => {
                    <Image
                        src={`data:image/png;base64, ${page.picture}`}
                        height="auto"
                        width="800px">
                    </Image>
                    return <p>{page.text}</p>
                })}
            </Carousel>
        </>
    )

}

export default Pages;