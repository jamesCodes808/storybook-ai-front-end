import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Image } from '@chakra-ui/react'
import { Text } from '@chakra-ui/react';

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

                    return <>
                        <Image
                            src={`data:image/png;base64, ${page.picture}`}
                            height="auto"
                            width="800px">
                        </Image>
                        <Text marginTop={4} fontSize={'xl'} fontWeight='semibold'>{page.text}</Text>
                    </>
                })}
            </Carousel>
        </>
    )

}

export default Pages;