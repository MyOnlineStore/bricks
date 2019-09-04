import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';
import Carousel from '.';
import Button from '../Button';
import Box from '../Box';
import Spinner from '../Spinner';
import Text from '../Text';

const slides = [
    <img key="0" width="100%" src="https://picsum.photos/id/100/1600/900" />,
    <img key="1" width="100%" src="https://picsum.photos/id/101/1600/900" />,
    <img key="2" width="100%" src="https://picsum.photos/id/102/1600/900" />,
    <img key="3" width="100%" src="https://picsum.photos/id/103/1600/900" />,
    <img key="4" width="100%" src="https://picsum.photos/id/104/1600/900" />,
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
                        setSlide(0);
                    }}
                />
                {(isAnimating && (
                    <Box width="24px">
                        <Spinner />
                    </Box>
                )) || (
                    <Text>
                        {slide + 1}/{slides.length}
                    </Text>
                )}
                <Button
                    variant="secondary"
                    title="To the final slide"
                    onClick={() => {
                        setSlide(4);
                    }}
                />
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
