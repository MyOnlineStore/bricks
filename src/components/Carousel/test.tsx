import React from 'react';
import { mount } from 'enzyme';
import MosTheme from '../../themes/MosTheme';
import Carousel from '.';

const slides = [<span key="0" />, <span key="1" />, <span key="2" />, <span key="3" />];

describe('Carousel', () => {
    it("should be testable with data-testid's", () => {
        const component = mount(
            <MosTheme>
                <Carousel data-testid="carousel">{slides}</Carousel>
            </MosTheme>,
        );

        expect(component.find('[data-testid="carousel"]').hostNodes().length).toBe(1);
        expect(component.find('[data-testid="carousel-next-button"]').hostNodes().length).toBe(1);
        expect(component.find('[data-testid="carousel-prev-button"]').hostNodes().length).toBe(1);
    });

    it('should call the onChange callback when a next or previous slide is shown', () => {
        const changeMock = jest.fn();

        const component = mount(
            <MosTheme>
                <Carousel data-testid="carousel" onChange={changeMock}>
                    {slides}j
                </Carousel>
            </MosTheme>,
        );

        component
            .find('[data-testid="carousel-next-button"]')
            .hostNodes()
            .simulate('click');

        expect(changeMock).toHaveBeenCalledWith(1);

        component
            .find('[data-testid="carousel-prev-button"]')
            .hostNodes()
            .simulate('click');

        expect(changeMock).toHaveBeenCalledWith(0);
    });

    it('should go back to the first slide when pressing next on the last slide', () => {
        const changeMock = jest.fn();

        const component = mount(
            <MosTheme>
                <Carousel data-testid="carousel" slide={3} onChange={changeMock}>
                    {slides}
                </Carousel>
            </MosTheme>,
        );

        component
            .find('[data-testid="carousel-next-button"]')
            .hostNodes()
            .simulate('click');

        expect(changeMock).toHaveBeenCalledWith(0);
    });

    it('should go to the last slide when pressing prev on the first slide', () => {
        const changeMock = jest.fn();

        const component = mount(
            <MosTheme>
                <Carousel data-testid="carousel" slide={0} onChange={changeMock}>
                    {slides}
                </Carousel>
            </MosTheme>,
        );

        component
            .find('[data-testid="carousel-prev-button"]')
            .hostNodes()
            .simulate('click');

        expect(changeMock).toHaveBeenCalledWith(slides.length - 1);
    });

    it('should not show next and prev buttons when only 1 slide is provided', () => {
        const changeMock = jest.fn();

        const component = mount(
            <MosTheme>
                <Carousel data-testid="carousel" slide={0} onChange={changeMock}>
                    <span />
                </Carousel>
            </MosTheme>,
        );

        expect(component.find('[data-testid="carousel-prev-button"]').hostNodes().length).toBe(0);
        expect(component.find('[data-testid="carousel-next-button"]').hostNodes().length).toBe(0);
    });
});
