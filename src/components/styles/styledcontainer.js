import styled, {css} from 'styled-components'
import { breakpoints } from './responsive';

function responsiveProp(prop, callback){
    if(prop){
        return breakpoints.map((breakpoints) => {
            if(prop[breakpoints.name]){
                return css`
                    @media (max-width: ${breakpoints.media}px){
                        ${callback(breakpoints)}
                    }
                `;
            }
        });
    }
}

export const Container = styled.div`
    height: 200px;
    width: 820px;
    border: 1px solid black;
    margin: auto;
    margin-top: 40px;

    ${({divSize}) => {
        return responsiveProp(
            divSize,
            (breakpoints) => css`
                width: ${divSize[breakpoints.name]}px;
                height: ${divSize[breakpoints.name]}px;
            `
        );
    }}
`;

export const Containercontenttitle = styled.div`
    height: 200px;
    width: 300px;
    border: 1px solid red;
`;