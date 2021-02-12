import React from 'react';
import Pagination, { TestIds } from '.';
import { mountWithTheme } from '../../utility/styled/testing';

const testid = 'pagination';

describe('Pagination', () => {
    it('should always show the first and last page', () => {
        const component = mountWithTheme(
            <Pagination totalPages={5} currentPage={1} onNavigate={() => {}} data-testid={testid} />,
        );

        const firstPage = component.findByTestId(`${testid}-${TestIds.firstPage}`);
        const lastPage = component.findByTestId(`${testid}-${TestIds.lastPage}`);

        expect(firstPage).toHaveLength(1);
        expect(lastPage).toHaveLength(1);
    });

    it('should show a previous button when current page is not 1', () => {
        const component = mountWithTheme(
            <Pagination totalPages={5} currentPage={2} onNavigate={() => {}} data-testid={testid} />,
        );

        const prevPage = component.findByTestId(`${testid}-${TestIds.prevPage}`);

        expect(prevPage).toHaveLength(1);
    });

    it('should show a next button when current page is not last', () => {
        const component = mountWithTheme(
            <Pagination totalPages={5} currentPage={2} onNavigate={() => {}} data-testid={testid} />,
        );

        const nextPage = component.findByTestId(`${testid}-${TestIds.nextPage}`);

        expect(nextPage).toHaveLength(1);
    });

    it('should navigate when clicking on the previous page', () => {
        const mockOnNavigate = jest.fn();

        const component = mountWithTheme(
            <Pagination totalPages={5} currentPage={5} onNavigate={mockOnNavigate} data-testid={testid} />,
        );

        const prevPage = component.findByTestId(`${testid}-${TestIds.prevPage}`);

        prevPage.simulate('click');
        expect(mockOnNavigate).toBeCalledWith(4);
    });

    it('should navigate when clicking on the first page', () => {
        const mockOnNavigate = jest.fn();

        const component = mountWithTheme(
            <Pagination totalPages={5} currentPage={5} onNavigate={mockOnNavigate} data-testid={testid} />,
        );

        const firstPage = component.findByTestId(`${testid}-${TestIds.firstPage}`);

        firstPage.simulate('click');
        expect(mockOnNavigate).toBeCalledWith(1);
    });

    it('should navigate when clicking on a center button', () => {
        const mockOnNavigate = jest.fn();

        const component = mountWithTheme(
            <Pagination totalPages={5} currentPage={1} onNavigate={mockOnNavigate} data-testid={testid} />,
        );

        const centerPage = component.findByTestId(`${testid}-${TestIds.centerPage}`).at(0);

        centerPage.simulate('click');
        expect(mockOnNavigate).toBeCalledWith(2);
    });

    it('should navigate when clicking on the last page', () => {
        const mockOnNavigate = jest.fn();

        const component = mountWithTheme(
            <Pagination totalPages={5} currentPage={1} onNavigate={mockOnNavigate} data-testid={testid} />,
        );

        const lastPage = component.findByTestId(`${testid}-${TestIds.lastPage}`);

        lastPage.simulate('click');
        expect(mockOnNavigate).toBeCalledWith(5);
    });

    it('should navigate when clicking on the next page', () => {
        const mockOnNavigate = jest.fn();

        const component = mountWithTheme(
            <Pagination totalPages={5} currentPage={2} onNavigate={mockOnNavigate} data-testid={testid} />,
        );

        const nextPage = component.findByTestId(`${testid}-${TestIds.nextPage}`);

        nextPage.simulate('click');
        expect(mockOnNavigate).toBeCalledWith(3);
    });

    it('should not navigate when clicking on the current page', () => {
        const mockOnNavigate = jest.fn();

        const component = mountWithTheme(
            <Pagination totalPages={5} currentPage={1} onNavigate={mockOnNavigate} data-testid={testid} />,
        );

        const nextPage = component.findByTestId(`${testid}-${TestIds.firstPage}`);

        nextPage.simulate('click');
        expect(mockOnNavigate).not.toBeCalled();
    });

    it('should show dots on the right when totalPages is higher then 4 and currentPage is under total - 2', () => {
        const componentFirstPage = mountWithTheme(
            <Pagination totalPages={5} currentPage={1} onNavigate={() => {}} data-testid={testid} />,
        );

        const rightDotsFirstPage = componentFirstPage.findByTestId(`${testid}-${TestIds.rightDots}`);

        expect(rightDotsFirstPage).toHaveLength(1);

        const componentSecondPage = mountWithTheme(
            <Pagination totalPages={5} currentPage={2} onNavigate={() => {}} data-testid={testid} />,
        );

        const rightDotsSecondPage = componentSecondPage.findByTestId(`${testid}-${TestIds.rightDots}`);

        expect(rightDotsSecondPage).toHaveLength(1);

        const componentThirdPage = mountWithTheme(
            <Pagination totalPages={5} currentPage={3} onNavigate={() => {}} data-testid={testid} />,
        );

        const rightDotsThirdPage = componentThirdPage.findByTestId(`${testid}-${TestIds.rightDots}`);

        expect(rightDotsThirdPage).toHaveLength(0);

        const componentFourPages = mountWithTheme(
            <Pagination totalPages={4} currentPage={1} onNavigate={() => {}} data-testid={testid} />,
        );

        const rightDotsFourPages = componentFourPages.findByTestId(`${testid}-${TestIds.rightDots}`);

        expect(rightDotsFourPages).toHaveLength(0);
    });

    it('should show dots on the left when totalPages is higher then 4 and currentPage is above 3', () => {
        const componentFirstPage = mountWithTheme(
            <Pagination totalPages={5} currentPage={5} onNavigate={() => {}} data-testid={testid} />,
        );

        const leftDotsFirstPage = componentFirstPage.findByTestId(`${testid}-${TestIds.leftDots}`);

        expect(leftDotsFirstPage).toHaveLength(1);

        const componentSecondPage = mountWithTheme(
            <Pagination totalPages={5} currentPage={4} onNavigate={() => {}} data-testid={testid} />,
        );

        const leftDotsSecondPage = componentSecondPage.findByTestId(`${testid}-${TestIds.leftDots}`);

        expect(leftDotsSecondPage).toHaveLength(1);

        const componentThirdPage = mountWithTheme(
            <Pagination totalPages={5} currentPage={3} onNavigate={() => {}} data-testid={testid} />,
        );

        const leftDotsThirdPage = componentThirdPage.findByTestId(`${testid}-${TestIds.leftDots}`);

        expect(leftDotsThirdPage).toHaveLength(0);

        const componentFourPages = mountWithTheme(
            <Pagination totalPages={4} currentPage={5} onNavigate={() => {}} data-testid={testid} />,
        );

        const leftDotsFourPages = componentFourPages.findByTestId(`${testid}-${TestIds.leftDots}`);

        expect(leftDotsFourPages).toHaveLength(0);
    });

    it('should render a proper sequence from the start', () => {
        const component = mountWithTheme(
            <Pagination totalPages={7} currentPage={1} onNavigate={() => {}} data-testid={testid} />,
        );

        const expectedSequence = ['1', '2', '3', '7'];
        let sequence = [];

        sequence.push(component.findByTestId(`${testid}-${TestIds.firstPage}`).text());

        component.findByTestId(`${testid}-${TestIds.centerPage}`).forEach(button => {
            sequence.push(button.text());
        });

        sequence.push(component.findByTestId(`${testid}-${TestIds.lastPage}`).text());

        expect(sequence).toEqual(expectedSequence);
    });

    it('should render a proper sequence near the start', () => {
        const component = mountWithTheme(
            <Pagination totalPages={7} currentPage={3} onNavigate={() => {}} data-testid={testid} />,
        );

        const expectedSequence = ['1', '2', '3', '4', '7'];
        let sequence = [];

        sequence.push(component.findByTestId(`${testid}-${TestIds.firstPage}`).text());

        component.findByTestId(`${testid}-${TestIds.centerPage}`).forEach(button => {
            sequence.push(button.text());
        });

        sequence.push(component.findByTestId(`${testid}-${TestIds.lastPage}`).text());

        expect(sequence).toEqual(expectedSequence);
    });

    it('should render a proper sequence in the middle', () => {
        const component = mountWithTheme(
            <Pagination totalPages={7} currentPage={4} onNavigate={() => {}} data-testid={testid} />,
        );

        const expectedSequence = ['1', '3', '4', '5', '7'];
        let sequence = [];

        sequence.push(component.findByTestId(`${testid}-${TestIds.firstPage}`).text());

        component.findByTestId(`${testid}-${TestIds.centerPage}`).forEach(button => {
            sequence.push(button.text());
        });

        sequence.push(component.findByTestId(`${testid}-${TestIds.lastPage}`).text());

        expect(sequence).toEqual(expectedSequence);
    });

    it('should render a proper sequence near the end', () => {
        const component = mountWithTheme(
            <Pagination totalPages={7} currentPage={5} onNavigate={() => {}} data-testid={testid} />,
        );

        const expectedSequence = ['1', '4', '5', '6', '7'];
        let sequence = [];

        sequence.push(component.findByTestId(`${testid}-${TestIds.firstPage}`).text());

        component.findByTestId(`${testid}-${TestIds.centerPage}`).forEach(button => {
            sequence.push(button.text());
        });

        sequence.push(component.findByTestId(`${testid}-${TestIds.lastPage}`).text());

        expect(sequence).toEqual(expectedSequence);
    });

    it('should render a proper sequence from the end', () => {
        const component = mountWithTheme(
            <Pagination totalPages={7} currentPage={7} onNavigate={() => {}} data-testid={testid} />,
        );

        const expectedSequence = ['1', '5', '6', '7'];
        let sequence = [];

        sequence.push(component.findByTestId(`${testid}-${TestIds.firstPage}`).text());

        component.findByTestId(`${testid}-${TestIds.centerPage}`).forEach(button => {
            sequence.push(button.text());
        });

        sequence.push(component.findByTestId(`${testid}-${TestIds.lastPage}`).text());

        expect(sequence).toEqual(expectedSequence);
    });
});
