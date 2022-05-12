import React from 'react'
import styled from 'styled-components';
import LocationOnOutlinedIcon from '@material-ui/icons/LocationOnOutlined';
import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import MenuOutlinedIcon from '@material-ui/icons/MenuOutlined';


function Header() {
  return (
    <Container className='d-flex flex-column'>
        <TopHeader className="d-flex align-items-start p-2" >
            <Left className="d-flex align-items-center flex-grow-1 flex-md-grow-0">
                <img src="https://links.papareact.com/f90" alt="amazon-logo" />
                <DeliverAddress className="d-flex align-items-end px-2 d-none d-lg-flex">                    
                    
                    <HeaderOption className="d-flex flex-column">
                        <OptionLineOne className="deliver-top">Deliver to</OptionLineOne>
                        <OptionLineTwo >
                            <LocationOnOutlinedIcon className="location_icon mb-1" />
                            Mauritania
                        </OptionLineTwo>
                    </HeaderOption>
                </DeliverAddress>
            </Left>
            <Middle className="rounded mx-2 d-flex flex-grow-1 d-none d-md-flex align-items-center">
                <InputSearch className="flex-grow-1 rounded-start px-2"/>
                <SearchOutlinedIcon className="s-width"/>
            </Middle>
            <Right >
                <HeaderOption className="d-flex flex-column">
                    <OptionLineOne>Hello, Sign in</OptionLineOne>
                    <OptionLineTwo>Account & list</OptionLineTwo>
                </HeaderOption>
                <HeaderOption className="d-flex flex-column d-none d-md-flex">
                    <OptionLineOne>Returns</OptionLineOne>
                    <OptionLineTwo>& Orders</OptionLineTwo>
                </HeaderOption>
                <Basket>
                    <ShoppingCartOutlinedIcon />
                    <OptionLineTwo className="pt-2 d-none d-md-inline basket">Basket</OptionLineTwo>
                    <BasketCount>0</BasketCount>
                </Basket>
                
            </Right>
        </TopHeader>
        <BottomHeader className="d-flex align-items-center px-3">
            <MenuOutlinedIcon />
            <OptionLineTwo>All</OptionLineTwo>
            <span>Prime Videos</span>
            <span>Amazon Business</span>
            <span>today's Deals</span>
            <span>Customer Services</span>
            <span className="d-none d-lg-inline">Register</span>
            <span className="d-none d-lg-inline">Git Cards</span>
            <span className="d-none d-lg-inline">Electronics</span>
            <span className="d-none d-lg-inline">Food & Groceries</span>
           
        </BottomHeader>
    </Container>
  )
}

export default Header

const Container = styled.div`color: #fff;`
const TopHeader = styled.div`
    height: 60px;
    background-color: #131921;
`
const BottomHeader = styled.div`
    height: 40px;
    background-color: #232F3E;
    gap: 20px;
`

const Left = styled.div`
    gap: 2px;
    img {
        width: 100px;
        object-fit: contain;
        margin-top: 7px;
        margin-left: 10px;
    }
`
const Right = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
`
const Middle = styled.div`
    background-color: #febd69;
    height: 40px;
    color: black;
    :focus-within {
        box-shadow: 0 0 0 3px #f90;
    }
`
const InputSearch = styled.input`
    height: inherit;
    border:none;
    outline: none;
`
const HeaderOption = styled.div`
    :hover {
        box-shadow: 0 0 0 1px #fff;
        border-radius: 1px;
    }
    line-height: 1;
    padding: 5px 7px;
    transition: .2s all ease;
`
const DeliverAddress = styled.div`
    gap: 1px;`
const OptionLineOne = styled.div`
    font-size: 13px;
    color: darkgray;
`
const OptionLineTwo = styled.div`
    font-weight: 700;
    font-size: 14px;
`
const Basket = styled.div`
    display: flex;
    align-items: end;
    gap:3px;
    cursor: pointer;
    margin-right: 10px;
    margin-top: 2px
    :hover div {
        text-decoration: underline;
    }
    position: relative;
`
const BasketCount = styled.div`
    position: absolute;
    top: -12px;
    left: 22px;
    font-weight: 700;
    color: #febd69;
`