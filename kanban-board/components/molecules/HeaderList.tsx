import Link from "next/link";
import styled from "styled-components";
import Image from "next/image";

function HeaderList() {
    const Nav = styled.div`    
    height:60px;
    align-items: center;
    `;
    const StyledUl = styled.ul `
    list-style: none;
    display: flex;
    `;

    const StyledLi = styled.li `
    margin-left: 20px;
    padding-left: 20px;
    `;

    const StyledButton = styled.button`
    background-color: transparent;
    border: none;
    cursor: pointer;
    &:hover{
        padding-bottom: 8px;
        border-bottom: 2px solid #000;
    }
    &:active{
        padding-bottom: 8px;
        border-bottom: 2px solid #000;
    }
    `;

    

    return (
        
        <Nav>
        <StyledUl>
            <StyledLi><StyledButton><Link href="/">リスト</Link></StyledButton></StyledLi>
            <StyledLi><StyledButton><Link href="/">ボード</Link></StyledButton></StyledLi>
            <StyledLi><StyledButton><Link href="/">カレンダー</Link></StyledButton></StyledLi>
            <StyledLi><StyledButton><Link href="/">ファイル</Link></StyledButton></StyledLi>
        </StyledUl>
        </Nav>
    );
}

export default HeaderList;