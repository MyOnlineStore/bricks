import { storiesOf } from '@storybook/react';
import React, { Component } from 'react';
import Select, { OptionStateType } from '.';
import { object, text, boolean } from '@storybook/addon-knobs';
import Box from '../Box';
import Text from '../Text';
import trbl from '../../utility/trbl';
import Icon from '../Icon';
import checkmarkIcon from '../../assets/icons/checkmark.svg';
// import ScrollBox from '../ScrollBox';

type DemoOptionType = {
    image: string;
    value: string;
    label: string;
    description: string;
};

const options: Array<DemoOptionType> = [
    {
        image: 'https://picsum.photos/100/100?image=988',
        value: 'A',
        label: 'Bar A',
        description: 'Lorem ipsum dolor sit amet.',
    },
    {
        image: 'https://picsum.photos/100/100?image=960',
        value: 'B',
        label: 'Foo B',
        description: 'Lorem ipsum dolor sit amet.',
    },
    {
        image: 'https://picsum.photos/100/100?image=958',
        value: 'C',
        label: 'Bar C',
        description: 'Lorem ipsum dolor sit amet.',
    },
    {
        image: 'https://picsum.photos/100/100?image=940',
        value: 'D',
        label: 'Foo D',
        description: 'Lorem ipsum dolor sit amet.',
    },
    {
        image: 'https://picsum.photos/100/100?image=924',
        value: 'E',
        label: 'Bar E',
        description: 'Lorem ipsum dolor sit amet.',
    },
    {
        image: 'https://picsum.photos/100/100?image=915',
        value: 'F',
        label: 'Bar F',
        description: 'Lorem ipsum dolor sit amet.',
    },
];

type PropsType = {};

type StateType = {
    value: string;
    scrollTop?: number;
};

class Demo extends Component<PropsType, StateType> {
    public constructor(props: PropsType) {
        super(props);

        this.state = {
            value: '',
        };
    }

    public handleChange = (value: string): void => {
        this.setState({ value });
    };

    public render(): JSX.Element {
        return (
            <Select
                placeholder={text('placeholder', 'Search a value')}
                value={this.state.value}
                emptyText={text('emptyText', 'No results')}
                onChange={this.handleChange}
                disabled={boolean('disabled', false)}
                data-testid="foo"
                options={object('options', options)}
            />
        );
    }
}

const renderSelected = (option: DemoOptionType): JSX.Element => {
    if (option.label !== '') {
        return (
            <Box grow={1} width="100%" direction="row" alignItems="center">
                <Box margin={trbl(0, 9, 0, 0)}>
                    <img width="50" height="50" src={option.image} />
                </Box>
                <Box direction="column">
                    <Text>{option.label}</Text>
                    <Text severity="info">{option.description}</Text>
                </Box>
            </Box>
        );
    } else {
        return (
            <Box direction="row" alignItems="center">
                <Text severity="info">{'Make a selection'}</Text>
            </Box>
        );
    }
};

const renderOption = (option: DemoOptionType, optionState: OptionStateType): JSX.Element => {
    return (
        <Box grow={1} width="100%" direction="row" alignItems="center">
            <Box margin={trbl(0, 9, 0, 0)}>
                <img src={option.image} />
            </Box>
            <Box direction="column">
                <Text severity={optionState.isSelected ? 'info' : undefined}>
                    {optionState.isSelected && (
                        <Text as="span" severity="info">
                            <Icon size="small" icon={checkmarkIcon} />
                            &nbsp;&nbsp;
                        </Text>
                    )}
                    {option.label}
                </Text>
                <Text severity="info">{option.description}</Text>
            </Box>
        </Box>
    );
};

/*tslint:disable*/
class CustomRenderDemo extends Component<PropsType, StateType> {
    public constructor(props: PropsType) {
        super(props);

        this.state = {
            value: '',
            scrollTop: 0,
        };
    }

    public handleChange = (value: string): void => {
        this.setState({ value });
    };

    public render(): JSX.Element {
        return (
            <Box height="200px" margin={[36, 0]}>
                {/* <ScrollBox
                    onScroll={({ scrollTop }) => {
                        this.setState({ scrollTop });
                    }}
                > */}
                <Box direction={'column'}>
                    Our visibility development lifecycle enables unparalleled, end-to-end siloes. Going forward, our
                    innovative prince2 practitioner will deliver value to emerging markets. Our Long-Term Big Data
                    solution offers milestones a suite of best-of-breed offerings. Change the way you do business -
                    adopt world-class innovations. You need to intelligently connect your paradigm shifts to increase
                    your team player velocity. Proactive action points conservatively enable competitive capabilities
                    for our standpoints. Our business incentivizes agile workflows to globally and iteratively leverage
                    our value-added best practice. We thrive because of our senior diversity and holistic enterprise
                    culture. So we can hit the ground running, we will be dynamically reusing every core asset in our
                    space. Virtually revolutionizing strategically immersive market foci is crucial to our best-in-class
                    deliverable. Our standard setter development lifecycle enables knowledge transfer, company-wide
                    stacks. Going forward, our actionable core competency will deliver value to propositions. In the
                    step-change space, industry is ethically synergising its next-generation stand-ups. We aim to
                    reliably relay our vertical by proactively facilitating our customer-focused corporate user
                    experiences. It's critical that we give 110% when effectively monetizing dot-bombs. It's critical
                    that we give 110% when proactively aligning alignments. Our visibility development lifecycle enables
                    unparalleled, end-to-end siloes. Going forward, our innovative prince2 practitioner will deliver
                    value to emerging markets. Our Long-Term Big Data solution offers milestones a suite of
                    best-of-breed offerings. Change the way you do business - adopt world-class innovations. You need to
                    intelligently connect your paradigm shifts to increase your team player velocity. Proactive action
                    points conservatively enable competitive capabilities for our standpoints. Our business incentivizes
                    agile workflows to globally and iteratively leverage our value-added best practice. We thrive
                    because of our senior diversity and holistic enterprise culture. So we can hit the ground running,
                    we will be dynamically reusing every core asset in our space. Virtually revolutionizing
                    strategically immersive market foci is crucial to our best-in-class deliverable. Our standard setter
                    development lifecycle enables knowledge transfer, company-wide stacks. Going forward, our actionable
                    core competency will deliver value to propositions. In the step-change space, industry is ethically
                    synergising its next-generation stand-ups. We aim to reliably relay our vertical by proactively
                    facilitating our customer-focused corporate user experiences. It's critical that we give 110% when
                    effectively monetizing dot-bombs. It's critical that we give 110% when proactively aligning
                    alignments.
                    <Select
                        placeholder={text('placeholder', 'Select a value')}
                        value={this.state.value}
                        emptyText={text('emptyText', 'No results')}
                        onChange={this.handleChange}
                        disabled={boolean('disabled', false)}
                        options={object('options', options)}
                        scrollTop={this.state.scrollTop}
                        renderSelected={renderSelected}
                        renderOption={renderOption}
                    />
                    You need to effectively invest your industry leaders to increase your organic growth velocity. Is
                    your stakeholder prepared for mission critical platform growth? In the future, will you be able to
                    ethically transform ballpark figures in your business? Is your cloud prepared for wholesale
                    architecture growth? Change the way you do business - adopt mobile executive searches. So we can hit
                    the ground running, we will be globally engineering every driver in our space. So we can hit the
                    ground running, we will be conservatively offshoring every synergy in our space. In the future, will
                    you be able to strategically calibrate game changers in your business? We aim to intelligently
                    virtualise our low hanging fruit by iteratively growing our seamless value-added bandwidths. In the
                    future, will you be able to virtually right-size capabilities in your business? Efficiencies will
                    come from reliably strategizing our enterprises. We use our best-in-class brands to dynamically
                    manage our silo expectations. In the future, will you be able to ethically integrate deliverables in
                    your business? Going forward, our company-wide stack will deliver value to architectures. It's
                    critical that we give 110% when effectively impacting innovations. We use our unparalleled executive
                    searches to reliably manage our stakeholder expectations. Seamless stand-ups are becoming
                    customer-focused synergy experts. Our Immersive Standpoint solution offers visibilities a suite of
                    actionable offerings. So we can hit the ground running, we will be globally deep-diving every user
                    experience in our space. We thrive because of our next-generation driver and world-class agile
                    workflow culture. In the future, will you be able to dynamically incentivize paradigm shifts in your
                    business? Our business calibrates action points to virtually and intelligently connect our senior
                    proposition. Our business leverages milestones to iteratively and conservatively revolutionize our
                    holistic step-change. We aim to proactively facilitate our bandwidth by strategically growing our
                    mobile end-to-end team players. Going forward, our wholesale low hanging fruit will deliver value to
                    capabilities. Mission critical clouds are becoming long-term best practice experts. Going forward,
                    our competitive organic growth will deliver value to capabilities. In the future, will you be able
                    to conservatively align platforms in your business? Our business relays enterprises to proactively
                    and strategically impact our knowledge transfer dot-bomb. Corporate diversities are becoming
                    innovative big data experts. Best-of-breed game changers ethically enable proactive brands for our
                    core competencies. Efficiencies will come from virtually integrating our standard setters. You need
                    to effectively invest your industry leaders to increase your organic growth velocity. Is your
                    stakeholder prepared for mission critical platform growth? In the future, will you be able to
                    ethically transform ballpark figures in your business? Is your cloud prepared for wholesale
                    architecture growth? Change the way you do business - adopt mobile executive searches. So we can hit
                    the ground running, we will be globally engineering every driver in our space. So we can hit the
                    ground running, we will be conservatively offshoring every synergy in our space. In the future, will
                    you be able to strategically calibrate game changers in your business? We aim to intelligently
                    virtualise our low hanging fruit by iteratively growing our seamless value-added bandwidths. In the
                    future, will you be able to virtually right-size capabilities in your business? Efficiencies will
                    come from reliably strategizing our enterprises. We use our best-in-class brands to dynamically
                    manage our silo expectations. In the future, will you be able to ethically integrate deliverables in
                    your business? Going forward, our company-wide stack will deliver value to architectures. It's
                    critical that we give 110% when effectively impacting innovations. We use our unparalleled executive
                    searches to reliably manage our stakeholder expectations. Seamless stand-ups are becoming
                    customer-focused synergy experts. Our Immersive Standpoint solution offers visibilities a suite of
                    actionable offerings. So we can hit the ground running, we will be globally deep-diving every user
                    experience in our space. We thrive because of our next-generation driver and world-class agile
                    workflow culture. In the future, will you be able to dynamically incentivize paradigm shifts in your
                    business? Our business calibrates action points to virtually and intelligently connect our senior
                    proposition. Our business leverages milestones to iteratively and conservatively revolutionize our
                    holistic step-change. We aim to proactively facilitate our bandwidth by strategically growing our
                    mobile end-to-end team players. Going forward, our wholesale low hanging fruit will deliver value to
                    capabilities. Mission critical clouds are becoming long-term best practice experts. Going forward,
                    our competitive organic growth will deliver value to capabilities. In the future, will you be able
                    to conservatively align platforms in your business? Our business relays enterprises to proactively
                    and strategically impact our knowledge transfer dot-bomb. Corporate diversities are becoming
                    innovative big data experts. Best-of-breed game changers ethically enable proactive brands for our
                    core competencies. Efficiencies will come from virtually integrating our standard setters.
                </Box>
                {/* </ScrollBox> */}
            </Box>
        );
    }
}
/*tslint:enable*/

storiesOf('Select', module)
    .add('Default', () => {
        return <Demo />;
    })
    .add('Custom rendering', () => {
        return <CustomRenderDemo />;
    });
