import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';
import Carousel from '.';
import Button from '../Button';
import Heading from '../Heading';
import Box from '../Box';

const Controlled = () => {
    const [slide, setSlide] = useState(0);

    return (
        <>
            <Heading>Current slide: {slide}</Heading>
            <Carousel
                slide={slide}
                onChange={newSlide => {
                    setSlide(newSlide);
                }}
            >
                <img width="100%" src="https://picsum.photos/id/100/1600/900" />
                <img width="100%" src="https://picsum.photos/id/101/1600/900" />
                <img width="100%" src="https://picsum.photos/id/102/1600/900" />
                <img width="100%" src="https://picsum.photos/id/103/1600/900" />
                <img width="100%" src="https://picsum.photos/id/104/1600/900" />
            </Carousel>
            <Box margin={[12, 0, 0, 0]} justifyContent="space-between">
                <Button
                    variant="secondary"
                    title="Back to first slide"
                    onClick={() => {
                        setSlide(0);
                    }}
                />
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
        return (
            <Carousel>
                <img width="100%" src="https://picsum.photos/id/100/1600/900" />
                <img width="100%" src="https://picsum.photos/id/101/1600/900" />
                <img width="100%" src="https://picsum.photos/id/102/1600/900" />
                <img width="100%" src="https://picsum.photos/id/103/1600/900" />
                <img width="100%" src="https://picsum.photos/id/104/1600/900" />
            </Carousel>
        );
    })
    .add('Controlled', () => <Controlled />)
    .add('With a single slide', () => (
        <Carousel>
            <img width="100%" src="https://picsum.photos/id/100/1600/900" />
        </Carousel>
    ));
