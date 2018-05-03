import { boolean, number } from '@storybook/addon-knobs/react';
import { storiesOf } from '@storybook/react';
import React, { Component } from 'react';
import ScrollBox from '.';
import styled from '../../utility/styled';
import trbl from '../../utility/trbl';
import Heading from '../Heading';
import Spacer from '../Spacer';
import SubHeading from '../SubHeading';
import Text from '../Text';

const demoContent = `
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ut mi ligula. Phasellus tellus nulla,
    cursus sit amet dolor eu, sodales facilisis tortor. Maecenas sed arcu quis est pharetra molestie sed
    eu leo. Mauris consequat mauris et eros gravida vestibulum. Phasellus convallis ipsum quis nisl lacinia,
    a pulvinar est porta. Nunc tempus vulputate dapibus. In eget venenatis orci. Pellentesque habitant morbi
    tristique senectus et netus et malesuada fames ac turpis egestas. Maecenas finibus lorem et quam imperdiet,
    id vestibulum odio molestie. Curabitur euismod sit amet tortor et imperdiet. Nam a nisl quis lorem porta
    pharetra. Duis sed magna vel odio ullamcorper gravida eu et nibh. Mauris tempor libero purus, vitae lacinia
    felis hendrerit in. Vestibulum rhoncus vitae ipsum vel placerat.

    Fusce euismod, sem quis tristique dictum, dolor nulla fermentum turpis, sed ultricies augue metus eget
    lorem. Donec nisi leo, tristique ac pretium id, aliquam eget purus. Aenean nec lectus vitae eros condimentum
    maximus et nec metus. Vestibulum ultricies dui non consequat porta. Vestibulum nec scelerisque sapien.
    Nam eu urna nec augue pellentesque tempus. Nulla facilisi. Phasellus fringilla nisi ut lorem aliquet
    mattis. Duis egestas dui ligula, ut lobortis purus suscipit id. Nunc non faucibus arcu. Integer eu
    elit tellus. Fusce suscipit sem sem, ut aliquam elit mollis vel. Sed quis accumsan dolor. Nullam
    gravida nec purus nec facilisis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
    lectus purus, vulputate ut egestas condimentum, condimentum vel lorem.
    Sed vitae consequat eros. Proin in magna odio. Morbi tempus nulla leo, sed condimentum velit semper et.
    Duis porttitor odio nibh, eget pellentesque ligula dignissim quis. Vivamus elit lacus, maximus ac rhoncus
    ultricies, dapibus at mi. Fusce sagittis nisl non lorem auctor viverra. Morbi lacinia vestibulum purus,
    at malesuada urna hendrerit sed.

    Proin ultricies vel nisl ac sollicitudin. Cras nisi mi, consectetur et sapien eget,
    placerat pellentesque ex. In sollicitudin tellus id tincidunt facilisis.
    Nunc hendrerit at eros vel venenatis. Pellentesque finibus sem tincidunt auctor cursus.
    Phasellus commodo ornare felis, id suscipit turpis aliquam ac. Donec et metus condimentum,
    dignissim sem et, dictum sapien.

    Cras elementum enim lorem, et pharetra nisi accumsan eu. Praesent
    feugiat nibh lacus, nec viverra turpis mattis et. Sed dolor urna,
    efficitur vitae ultrices eu, faucibus ac libero. Quisque euismod
    elit mattis, tincidunt lorem sed, fermentum risus. Morbi elementum cursus venenatis.
    Ut turpis sem, varius in ultrices quis, tristique quis justo. In tortor neque, mollis
    ut lacinia quis, euismod vel libero. Sed nec ipsum ante. Vivamus facilisis nulla
    facilisis magna porta, tempor congue arcu sodales. Praesent commodo at lacus nec feugiat.
    Donec libero dui, accumsan eget metus non, pharetra euismod erat. Quisque tincidunt est
    in odio laoreet consequat consectetur at lectus. Praesent ut porta leo.
`;

const StyledDiv = styled.div`
    max-width: 300px;
    border: solid 3px rgba(255, 36, 94, 0.3);
`;

type DemoStateType = {
    scrollTop:number;
    scrollBottom?:number;
    scrollDirection:string;
};

class Demo extends Component<{}, DemoStateType> {
    public constructor(props:{}) {
        super(props);

        this.state = {
            scrollTop: 0,
            scrollDirection: 'idle',
        };
    }

    public render():JSX.Element {
        return (
            <>
                <StyledDiv>
                    <ScrollBox
                        maxHeight={number('maxHeight', 400)}
                        showInsetShadow={boolean('showInsetShadow', true)}
                        autoHideScrollBar={boolean('autoHideScrollBar', true)}
                        onScroll={({ scrollTop, scrollBottom, scrollDirection }):void => {
                            this.setState({
                                scrollTop,
                                scrollBottom,
                                scrollDirection,
                            });
                        }}
                    >
                        <Spacer offsetType="inner" offset={trbl(12, 24, 12, 12)}>
                            <Heading>Lorem ipsum dolor sit amet.</Heading>
                            <Text>
                                {demoContent}
                            </Text>
                        </Spacer>
                    </ScrollBox>
                </StyledDiv>
                <Spacer offset={trbl(48, 0, 12)}>
                    <SubHeading>
                        Scroll event
                    </SubHeading>
                </Spacer>
                <Text>
                    scrollTop: {this.state.scrollTop}px<br />
                    scrollBottom: {this.state.scrollBottom}px<br />
                    scrollDirection: {this.state.scrollDirection}
                </Text>
            </>
        );
    }
}

storiesOf('ScrollBox', module)
    .add('Default', () => {
        return (
            <Demo />
        );
    });
