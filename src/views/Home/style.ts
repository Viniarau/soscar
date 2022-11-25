import styled from 'styled-components/native';

export const Container = styled.View`
    flex: 1;
    align-items: center;
    padding-top: 35px;
`;

export const ContainerExit = styled.View`
    position: absolute;
    z-index: 999;
    top: 45px;
    left: 15px;
    width: 44px;
    height: 44px;
    border-radius: 30px;
    background-color: #fff;
    align-items: center;
    justify-content: center;
`;

export const TextExit = styled.Text`
    font-size: 40px
    color: #C1C0C9;
`;
