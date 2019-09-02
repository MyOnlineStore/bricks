import React, { FC, Children, useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';
import IconButton from '../IconButton';
import chevronRight from '../../assets/icons/chevron-right.svg';
import chevronLeft from '../../assets/icons/chevron-left.svg';

const OuterWrapper = styled.div<{ ratio: [number, number] }>`
    position: relative;
    overflow: hidden;
    width: 100%;
    padding-top: ${({ ratio }) => 100 / (ratio[0] / ratio[1])}%;
`;

const Slide = styled(motion.div)<{ active: boolean }>`
    position: absolute;
    top: 0;
    width: 100%;
    height: 100%;
    z-index: ${({ active }) => (active ? '1' : '')};
`;

const SlideButton = styled(IconButton)<{ direction: 'prev' | 'next' }>`
    position: absolute;
    top: calc(50% - 21px);
    ${({ direction }) => (direction === 'next' ? 'right: 12px' : 'left: 12px')}
    background: rgba(255,255,255, 0.6);
    border-radius: 50%;
    z-index: 3;
    width: 42px;
    height: 42px;
`;

type PropsType = {
    /**
     * Let's you define the aspect ratio of the slides in the carousel, default: 16,9
     */
    ratio?: [number, number];
    /**
     * This component has 2 modes, controlled and uncontrolled.
     * You can manage the state yourself by passing in the active slide
     * and adding an onChange callback
     */
    slide?: number;
    /**
     * Allows you to add a callback. It'll receive the slide that should be shown **next**.
     */
    onChange?(newSlide: number): void;
};

const Carousel: FC<PropsType> = props => {
    const ratio: [number, number] = props.ratio || [16, 9];
    const [slide, setSlide] = useState(props.slide || 0);
    const slides = Children.toArray(props.children);

    const slideTo = (direction: number) => {
        let newSlide = slide + direction;

        if (newSlide > slides.length - 1) {
            newSlide = 0;
        }

        if (newSlide < 0) {
            newSlide = slides.length - 1;
        }

        if (props.onChange) {
            props.onChange(newSlide);
        }

        if (props.slide === undefined) {
            setSlide(newSlide);
        }
    };

    useEffect(() => {
        if (props.slide !== undefined) {
            setSlide(props.slide);
        }
    }, [props.slide]);

    return (
        <OuterWrapper ratio={ratio}>
            {slides.map((child, index) => {
                return (
                    <Slide
                        key={index}
                        active={slide === index}
                        transition={{
                            type: 'spring',
                            stiffness: 200,
                            damping: 200,
                        }}
                        initial={false}
                        animate={{ x: `${(index - slide) * 100}%` }}
                    >
                        {child}
                    </Slide>
                );
            })}
            <SlideButton icon={chevronLeft} direction="prev" title="Show previous slide" onClick={() => slideTo(-1)} />
            <SlideButton icon={chevronRight} direction="next" title="Show next slide" onClick={() => slideTo(1)} />
        </OuterWrapper>
    );
};

export default Carousel;
