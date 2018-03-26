import React, { Component } from 'react';
import StyledFoldOut from './FoldOut.style';

type ContentProps = {
    contentHeight?:StateType['contentHeight'];
    isOpen:PropsType['isOpen'];
};

type StateType = {
    contentHeight?:number;
};

type PropsType = {
    isOpen:boolean;
};

class FoldOut extends Component<PropsType, StateType> {
    private contentRef:HTMLDivElement | null;

    public constructor(props:PropsType) {
        super(props);

        this.state = {
            contentHeight: undefined,
        };
    }

    private updateHeight = ():void => {
        if (this.contentRef !== null) {
            this.setState({
                contentHeight: this.contentRef.offsetHeight,
            });
        }
    }

    public componentDidMount():void {
        window.addEventListener('resize', this.updateHeight);
        this.updateHeight();
    }

    public componentWillUnmount():void {
        window.removeEventListener('resize', this.updateHeight);
    }

    public render():JSX.Element {
        return (
            <StyledFoldOut isOpen={this.props.isOpen} contentHeight={this.state.contentHeight}>
                <div ref={(ref):void => { this.contentRef = ref; }}>
                    {this.props.children}
                </div>
            </StyledFoldOut>
        );
    }
}

export default FoldOut;
export {
    ContentProps,
    StateType,
    PropsType,
};
