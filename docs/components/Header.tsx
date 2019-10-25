import styled from 'styled-components';

const Header = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;

    .inner {
        align-items: center;
        width: 900px;
        justify-content: space-between;
    }

    img {
        max-height: 150px;
        cursor: pointer;
        margin: 10px;
    }
`;

export default Header;
