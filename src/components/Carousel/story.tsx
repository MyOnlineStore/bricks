import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';
import Carousel from '.';
import Button from '../Button';
import Box from '../Box';
import Progress from '../Progress';
import Text from '../Text';

const slides = [
    <img key="0" width="100%" src="https://picsum.photos/id/100/1600/900" />,
    <img key="1" width="100%" src="https://picsum.photos/id/101/1600/900" />,
    <img key="2" width="100%" src="https://picsum.photos/id/102/1600/900" />,
    <img key="3" width="100%" src="https://picsum.photos/id/103/1600/900" />,
    <img key="4" width="100%" src="https://picsum.photos/id/104/1600/900" />,
    <img key="5" width="100%" src="https://picsum.photos/id/112/1600/900" />,
    <img key="6" width="100%" src="https://picsum.photos/id/106/1600/900" />,
    <img key="7" width="100%" src="https://picsum.photos/id/107/1600/900" />,
    <img key="8" width="100%" src="https://picsum.photos/id/108/1600/900" />,
    <img key="9" width="100%" src="https://picsum.photos/id/109/1600/900" />,
    <img key="10" width="100%" src="https://picsum.photos/id/110/1600/900" />,
    <img key="11" width="100%" src="https://picsum.photos/id/111/1600/900" />,
];

const Controlled = () => {
    const [slide, setSlide] = useState(0);
    const [isAnimating, setAnimating] = useState(false);

    return (
        <>
            <Carousel
                slide={slide}
                onChange={newSlide => {
                    setSlide(newSlide);
                    setAnimating(true);
                }}
                onAfterChange={() => {
                    setAnimating(false);
                }}
            >
                {slides}
            </Carousel>
            <Box margin={[12, 0, 0, 0]} alignItems="center" justifyContent="space-between">
                <Button
                    variant="secondary"
                    title="Back to first slide"
                    onClick={() => {
                        setAnimating(true);
                        setSlide(0);
                    }}
                />
                <Progress current={slide} total={slides.length} paginateBy={7} />
                <Button
                    variant="secondary"
                    title="To the final slide"
                    onClick={() => {
                        setAnimating(true);
                        setSlide(slides.length - 1);
                    }}
                />
            </Box>
            <Box margin={[12, 0, 0, 0]}>
                <Text>Animating: {isAnimating ? 'yes' : 'no'}</Text>
            </Box>
        </>
    );
};

storiesOf('Carousel', module)
    .add('Uncontrolled', () => {
        return <Carousel>{slides}</Carousel>;
    })
    .add('Controlled', () => <Controlled />)
    .add('With a single slide', () => (
        <Carousel>
            <img width="100%" src="https://picsum.photos/id/100/1600/900" />
        </Carousel>
    ));
