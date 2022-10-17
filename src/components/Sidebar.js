import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { CanvasSidebar } from '../components/Another';
import { Link } from "react-router-dom";

export const Div = styled.div`
    width: 250px;
    height: 100%;
    box-shadow: 0px 0px 3px black;
    padding: 5px;
    background-color: white;
`
export const Ul = styled.ul`
    width: 100%;
    height: auto;
    list-style: none;
`
export const Li = styled.li`
    width: 100%;
    height: fit-content;
    display: flex;
    align-items: center;
    padding: 5px;
    :hover {
        cursor: pointer;
        background-color: #F0F3FF;
        border-right: solid 5px #005FB8;
        color: #005FB8;
    }
`
export const Logo = styled.p`
    width: 100%;
    height: 100px;
    margin-bottom: 5px;
    padding: 10px;
    font-size: 34px;
    display: flex;
    align-items: center;
    justify-content:center;
    background-color: #005FB8;
    color: white;
    font-weight: 700;
    letter-spacing: 5px;
    text-shadow: 0px 4px 3px rgb(0 0 0 / 40%), 0px 8px 13px rgb(0 0 0 / 10%), 0px 18px 23px rgb(0 0 0 / 10%);
`
export const LogoMenu = styled.img`
    width: 32px;
    height: 32px;
    margin-right: 20px;
`
export const Logout = styled.img`
    width: 32px;
    height: 32px;
    margin-right: 20px;
    :hover {
        cursor: pointer;
    }
`
export const MenuLabel = styled.p`
    text-decoration: none;
`
export const Sidebar = () => {
	let navigate = useNavigate(); 
    const routeChange = () =>{ 
        let path = `/`; 
        navigate(path);
    }

    return(
        <CanvasSidebar>
            <Div>
                <Logo>ZENITEX</Logo>
                <Ul>
                    <Li id="listjob" >
                        <LogoMenu src={ require('../images/list.png') } />
                        <Link  to={'/listjob'}><MenuLabel>รายการแจ้งซ่อม</MenuLabel></Link>
                    </Li>
                    <Li id="reportJob" >
                        <LogoMenu src={ require('../images/report.png') } />
                        <Link to={'/reportJob'}>รายงานการแจ้งซ่อม</Link>
                    </Li>
                    <Li id="listComputer" >
                        <LogoMenu src={ require('../images/computer.png') } />
                        <Link to={'/listComputer'}>เครื่องคอมพิวเตอร์</Link>
                    </Li>
                    <Li id="listPrinter" >
                        <LogoMenu src={ require('../images/printer.png') } />
                        <Link to={'/listPrinter'}>เครื่องปริ้นเตอร์</Link>
                    </Li>
                    <Li id="listUps" >
                        <LogoMenu src={ require('../images/ups.png') } />
                        <Link to={'/listUps'}>เครื่องสำรองไฟ</Link>
                    </Li>
                    <Li id="listNetwork" >
                        <LogoMenu src={ require('../images/network.png') } />
                        <Link to={'/listNetwork'}>อุปกรณ์เครือข่าย</Link>
                    </Li>
                    <Li id="listcctv" >
                        <LogoMenu src={ require('../images/cctv.png') } />
                        <Link to={'/listcctv'}>กล้องวงจรปิด</Link> 
                    </Li>
                    <Li id="listSpare" >
                        <LogoMenu src={ require('../images/spare.png') } />
                        <Link to={'/listSpare'}>อะไหล่สำรอง</Link>
                    </Li>
                    <Li id="listManual" >
                        <LogoMenu src={ require('../images/manual.png') } />
                        <Link to={'/listManual'}>คู่มือไอที</Link>
                    </Li>
                </Ul>
                <Logout 
                    onClick={routeChange} 
                    src={ require('../images/logout.png') } />
            </Div>
        </CanvasSidebar>
    );
}