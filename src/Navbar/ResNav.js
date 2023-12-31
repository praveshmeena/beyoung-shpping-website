import {useState, useEffect} from 'react';
import {Link, useParams} from 'react-router-dom';
import { Container, Flex, Button, Box, useDisclosure, Text } from '@chakra-ui/react';
import {HiOutlineMenuAlt1} from 'react-icons/hi'
import {AiOutlineSearch, AiOutlineHeart} from 'react-icons/ai'
import {PiShoppingBagLight} from 'react-icons/pi'
import { NavLink, useLocation } from 'react-router-dom';
import React from 'react';  
import beyoungLogo from '../Assets/beyoung-logo-removebg.png';
import Footer from '../Components/Footer';
import {GrUserManager,GrUser, GrUserFemale} from 'react-icons/gr';
import { GiClothes } from "react-icons/gi";
import { TbMoodKid } from "react-icons/tb";
import { RiCloseLine } from "react-icons/ri";
import {AiOutlineLeft} from 'react-icons/ai';

export default function ResNav() {
  const [userInfo, setUserInfo] = useState([]);
  const {gender, id} = useParams();
  console.log(id , gender)
  const { isOpen, onOpen, onClose } = useDisclosure();
  const location = useLocation();
 

  useEffect(() => {
    const user = localStorage.getItem("signup");
    if (user) {
      const parseData = JSON.parse(user);
      setUserInfo(parseData);
    }
  }, []);

  return (
    <div style={{ position: "fixed", left: 0, top: 0, right: 0, zIndex: "100", backgroundColor: "white", margin:"0" }}>
    {location.pathname.includes("/ResCategory") ? (
      <Box style={{ marginLeft: "20px", marginRight: "20px", height: "65px", width:"100%" }}>
        <Flex style={{ justifyContent: "space-between", alignItems: "center" }}>
          <Link to="/ResCategory/men" style={{ textDecoration: "none", color: "black" }}>
            <h4 className='heading'>MEN</h4>
          </Link>
          <Link to="/ResCategory/women" style={{ textDecoration: "none", color: "black" }}>
            <h4 className='heading'>WOMEN</h4>
          </Link>
          
          <h4 className='heading' style={{marginRight:"20px"}}>ACCESSORIES</h4>
        </Flex>
        <hr style={{ marginTop: "-18px" }} />
        <Container style={{ bottom: "0", position: "fixed", zIndex: "100", left: "0", right: "0" }}>
          <Footer />
        </Container>
      </Box>
  ) : location.pathname.includes("/subcategories") ? (
    <>
   <Container style={{backgroundColor:"white", height:"30px",width:"100%"}}>
    <Flex style={{justifyContent:"space-between"}}>
    
    <Flex>
    <Link to ="/ResCategory/men" style={{textDecoration:"none"}}>
    <AiOutlineLeft style={{marginTop:"7px"}}/>
    </Link>
    </Flex>
    
    <Flex>
    <AiOutlineSearch style={{paddingTop:"7px" , marginRight:"10px"}} />
    <NavLink to ="/Wishlist" style={{color:"black"}}>
    <AiOutlineHeart style={{paddingTop:"7px", marginRight:"10px"}} />
    </NavLink>
    <NavLink to ="/Cart"  style={{color:"black"}}>
    <PiShoppingBagLight style={{paddingTop:"7px", marginRight:"10px"}}/>
    </NavLink>
    </Flex>
    </Flex>
   </Container>
   <Container style={{bottom:"0", position:"fixed", zIndex:"100", left:"0", right:"0"}}>
   <Footer />
   </Container>
   </>
  ):location.pathname.includes("/product") ? (
     <>
   <Container style={{backgroundColor:"white", height:"30px",width:"100%"}}>
    <Link to ="/" style={{textDecoration:"none"}}>
    <AiOutlineLeft style={{marginTop:"7px", fontSize:"15px"}}/>
    </Link>
    </Container>
    </>
  ):location.pathname.includes("/Wishlist") ? (
    <>
     <Container style={{backgroundColor:"white", height:"30px",width:"100%"}}>
    <Flex style={{justifyContent:"space-between"}}>
    
    <Flex>
    <Link to ="/" style={{textDecoration:"none"}}>
    <AiOutlineLeft style={{marginTop:"10px"}}/>
    </Link>
    <Text style={{marginLeft:"15px", marginTop:"8px"}}>My Wishlist</Text>
    </Flex>
    
    <Flex>
  
    <NavLink to ="/Cart"  style={{color:"black"}}>
    <PiShoppingBagLight style={{paddingTop:"7px", marginRight:"10px", fontSize:"25px"}}/>
    </NavLink>
    </Flex>
    </Flex>
   </Container>
   <Container style={{bottom:"0", position:"fixed", zIndex:"100", left:"0", right:"0"}}>
   <Footer />
   </Container>
    </>
  ):location.pathname ==='/' ? (
   <>
   <Container style={{backgroundColor:"#fdd835", height:"30px",width:"100%"}}>
    <Flex style={{justifyContent:"space-between"}}>
    <Flex>
    <Flex>
      <Button
        onClick={onOpen} leftIcon={<HiOutlineMenuAlt1/>} 
        size="lg" fontSize="20px" marginLeft="10px" paddingTop="5px" backgroundColor="#fdd835" border="none"> 
      </Button>
      <Box
        as="aside"
        bg="white"
        color="black"
        width="300px"
        position="fixed"
        top="0"
        left={isOpen ? "0" : "-300px"}
        height="100%"
        transition="left 0.3s"
        zIndex={10}>
          <Box style={{ textAlign: "right", paddingRight: "10px", paddingTop: "5px" }}>
                  <Button onClick={onClose} variant="link">
                    <RiCloseLine style={{ fontSize: "24px" }} />
                  </Button>
                </Box>

      <Box>
      <h2 style={{marginLeft:"20px"}}>Hello, {userInfo?.signup?.data?.name} </h2>
      <hr/>
      </Box>
      
      <NavLink to="/ResCategory/men" style={{textDecoration:"none", color:"black"}}>
      <Flex style={{marginLeft:"30px", marginBottom:"20px"}}>
      <Text style={{fontWeight:"bold"}}>Men</Text>
      <GrUser style={{marginLeft:"58%", marginTop:"20px", fontSize:"30px"}} />
      </Flex>
      </NavLink>

      <NavLink to="/ResCategory/women" style={{textDecoration:"none", color:"black"}}>
      <Flex style={{marginLeft:"30px", marginBottom:"20px"}}>
      <Text style={{fontWeight:"bold"}}>Women</Text>
      <GrUserFemale style={{marginLeft:"50%", marginTop:"20px", fontSize:"30px"}} />
      </Flex>
      </NavLink>

      <Flex style={{marginLeft:"30px", marginBottom:"20px"}}>
      <Text style={{fontWeight:"bold"}}>Accessories</Text>
      <GiClothes style={{marginLeft:"40%", marginTop:"20px", fontSize:"30px"}} />
      </Flex>

      <Flex style={{marginLeft:"30px", marginBottom:"20px"}}>
      <Text style={{fontWeight:"bold"}}>Kids</Text>
      <TbMoodKid style={{marginLeft:"59%", marginTop:"20px", fontSize:"30px"}} />
      </Flex>
     
      </Box>
      {isOpen && (
        <Box
          onClick={onClose}
          bg="rgba(0, 0, 0, 0.5)"
          position="fixed"
          top="0"
          left="0"
          width="100%"
          height="100%"
          zIndex={9}
        />
      )}
    </Flex>
    <img src={beyoungLogo} alt="logo" style={{width:"35px", height:"25px", marginLeft:"10px", paddingTop:"5px"}}/>
    </Flex>
    <Flex>
    <AiOutlineSearch style={{paddingTop:"7px" , marginRight:"10px"}} />
    <NavLink to ="/Wishlist" style={{color:"black"}}>
    <AiOutlineHeart style={{paddingTop:"7px", marginRight:"10px"}} />
    </NavLink>
    <NavLink to ="/Cart"  style={{color:"black"}}>
    <PiShoppingBagLight style={{paddingTop:"7px", marginRight:"10px"}}/>
    </NavLink>
    </Flex>
    </Flex>
   </Container>
   <Container style={{bottom:"0", position:"fixed", zIndex:"100", left:"0", right:"0"}}>
   <Footer />
   </Container>
   </>):null}
   </div>
   
  )
}
