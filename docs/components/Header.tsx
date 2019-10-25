import styled from 'styled-components';

const Header = styled.div`
    display: flex;
    flex-direction: row;
    height: 20vh;
    margin: auto;
    width: 100%;

    align-items: center;
    justify-content: space-between;

    img {
        max-height: 150px;
        cursor: pointer;
        margin: 10px;
    }
`;

export default Header;
