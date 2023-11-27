import React from "react";
import ImageSlider from "./ImageSlider";
import { useState, useEffect } from "react";
import {
  ListItem,
  UnorderedList,
  Flex,
  Box,
  Button,
  Text,
} from "@chakra-ui/react";
import { Link, NavLink } from "react-router-dom";
import Footer from "./Footer";
import tshirt from "../Images/tshirt.png";
import shorts from "../Images/shorts.png";
import joggers from "../Images/joggers.png";
import pyjama from "../Images/pyjama.png";
import shirts from "../Images/shirts.png";
import oversized from "../Images/oversized.png";
import women1 from "../Images/women1.png";
import women2 from "../Images/women2.png";
import women3 from "../Images/women3.png";
import women4 from "../Images/women4.png";
import women5 from "../Images/women5.png";
import women6 from "../Images/women6.png";
import banner from "../Images/BANNER-DESKTOP-VIEW.jpg";
import men from "../Images/men.jpg";
import women from "../Images/women.jpg";
import accessories from "../Images/accessories.jpg";
import winter from "../Images/winter.jpg";
import shop1 from "../Images/shop1.webp";
import shop2 from "../Images/shop2.webp";
import shop3 from "../Images/shop3.jpg";
import shop4 from "../Images/shop4.webp";
import shop5 from "../Images/shop5.webp";
import shop6 from "../Images/shop6.jpg";
import shop7 from "../Images/shop7.webp";
import shop8 from "../Images/shop8.webp";
import shop9 from "../Images/shop9.webp";
import shop10 from "../Images/shop10.webp";

const data = [
  "https://www.beyoung.in/api/catalog/homepage-3-10/Offers-strip/desktop/1-new.png",
  "https://www.beyoung.in/api/catalog/homepage-3-10/Offers-strip/desktop/2-new.png",
  "https://www.beyoung.in/api/catalog/homepage-3-10/Offers-strip/desktop/3-new.png",
  "https://www.beyoung.in/api/catalog/homepage-3-10/Offers-strip/desktop/4-new.png",
  "https://www.beyoung.in/api/catalog/homepage-3-10/Offers-strip/desktop/5-new.png",
  "https://www.beyoung.in/api/catalog/homepage-3-10/Offers-strip/desktop/6-new.png",
  "https://www.beyoung.in/api/catalog/homepage-3-10/Offers-strip/desktop/7-new.png",
];

export default function Home() {
  const [smallerScreen, setSmallerScreen] = useState(window.innerWidth < 1000);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % data.length);
    }, 5000);

    return () => {
      clearInterval(interval);
    };
  }, []);
  const translateValue = -currentIndex * 100;

  useEffect(() => {
    const handleResize = () => {
      setSmallerScreen(window.innerWidth < 1000);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const headingStyle = {
    fontWeight: "bold",
    display: "flex",
    alignItems: "center",
    background:
      "linear-gradient(90deg, rgba(248, 235, 39, 0.00) 0%, #F8EB27 48.11%, rgba(248, 235, 39, 0.00) 100%)",
    width: "100%",
    justifyContent: "center",
  };

  return (
    <>
      {smallerScreen ? (
        <>
          <Box style={{ marginTop: "3rem", zIndex: "0" }}>
            <Flex
              style={{
                marginTop: "20px",
                gap: "20px",
                overflowX: "auto",
                whiteSpace: "nowrap",
                paddingLeft: "10px",
              }}
            >
              <Box>
                <NavLink
                  to="/ResCategory/men"
                  style={{ textDecoration: "none", color: "black" }}
                >
                  <img
                    src={men}
                    style={{
                      width: "160px",
                      height: "200px",
                      borderRadius: "30px",
                    }}
                  />
                  <Text
                    style={{
                      paddingLeft: "50px",
                      fontWeight: "bold",
                      fontSize: "20px",
                    }}
                  >
                    Men
                  </Text>
                </NavLink>
              </Box>

              <Box>
                <Link
                  to="/ResCategory/women"
                  style={{ textDecoration: "none", color: "black" }}
                >
                  <img
                    src={women}
                    style={{
                      width: "160px",
                      height: "200px",
                      borderRadius: "30px",
                    }}
                  />
                  <Text
                    style={{
                      paddingLeft: "50px",
                      fontWeight: "bold",
                      fontSize: "20px",
                    }}
                  >
                    Women
                  </Text>
                </Link>
              </Box>

              <Box>
                <img
                  src={accessories}
                  style={{
                    width: "160px",
                    height: "200px",
                    borderRadius: "30px",
                  }}
                />
                <Text
                  style={{
                    paddingLeft: "30px",
                    fontWeight: "bold",
                    fontSize: "20px",
                  }}
                >
                  Accessories
                </Text>
              </Box>
              <Box>
                <NavLink
                  to="/subcategories/women/pyjama"
                  style={{ color: "black", textDecoration: "none" }}
                >
                  <img
                    src={winter}
                    style={{
                      width: "160px",
                      height: "200px",
                      borderRadius: "30px",
                    }}
                  />
                  <Text
                    style={{
                      paddingLeft: "30px",
                      fontWeight: "bold",
                      fontSize: "20px",
                    }}
                  >
                    WinterWear
                  </Text>
                </NavLink>
              </Box>
            </Flex>
            <ImageSlider />
            <Box style={{ marginTop: "30px" }}>
              <Text
                style={{
                  fontWeight: "bolder",
                  fontSize: "25px",
                  textAlign: "center",
                }}
              >
                TRENDING CATEGORIES
              </Text>
              <Box>
                <Link to="/subcategories/men/tshirt">
                  <img
                    src={shop3}
                    style={{
                      width: "95%",
                      borderRadius: "20px",
                      alignItems: "center",
                      paddingLeft: "10px",
                    }}
                  />
                </Link>
                <Box style={{ position: "relative" }}>
                  <Flex
                    style={{
                      gap: "10px",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <Link to="/subcategories/men/jeans">
                      <img
                        src={shop1}
                        style={{
                          maxWidth: "90%",
                          height: "auto",
                          borderRadius: "20px",
                          margin: "10px",
                        }}
                      />
                    </Link>
                    <Link to="/subcategories/men/hoodies">
                      <img
                        src={shop2}
                        style={{
                          maxWidth: "90%",
                          height: "auto",
                          borderRadius: "20px",
                          margin: "10px",
                        }}
                      />
                    </Link>
                  </Flex>
                </Box>
                <Box style={{ position: "relative" }}>
                  <Flex
                    style={{
                      gap: "10px",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <Link to="/subcategories/men/jogger">
                      <img
                        src={shop4}
                        style={{
                          maxWidth: "90%",
                          height: "auto",
                          borderRadius: "20px",
                          margin: "10px",
                        }}
                      />
                    </Link>
                    <Link to="/subcategories/men/sweater">
                      <img
                        src={shop5}
                        style={{
                          maxWidth: "90%",
                          height: "auto",
                          borderRadius: "20px",
                          margin: "10px",
                        }}
                      />
                    </Link>
                  </Flex>
                </Box>
                <Link to="/subcategories/women/tshirt">
                  <img
                    src={shop6}
                    style={{
                      width: "95%",
                      borderRadius: "20px",
                      alignItems: "center",
                      paddingLeft: "10px",
                    }}
                  />
                </Link>

                <Box style={{ position: "relative" }}>
                  <Flex
                    style={{
                      gap: "10px",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <Link to="/subcategories/women/hoddies">
                      <img
                        src={shop7}
                        style={{
                          maxWidth: "90%",
                          height: "auto",
                          borderRadius: "20px",
                          margin: "10px",
                        }}
                      />
                    </Link>
                    <Link to="/subcategories/women/jogger">
                      <img
                        src={shop8}
                        style={{
                          maxWidth: "90%",
                          height: "auto",
                          borderRadius: "20px",
                          margin: "10px",
                        }}
                      />
                    </Link>
                  </Flex>
                </Box>
                <Box style={{ position: "relative", marginBottom: "50px" }}>
                  <Flex
                    style={{
                      gap: "10px",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <Link to="/subcategories/women/jeans">
                      <img
                        src={shop9}
                        style={{
                          maxWidth: "90%",
                          height: "auto",
                          borderRadius: "20px",
                          margin: "10px",
                        }}
                      />
                    </Link>
                    <Link to="/subcategories/women/pyjama">
                      <img
                        src={shop10}
                        style={{
                          maxWidth: "90%",
                          height: "auto",
                          borderRadius: "20px",
                          margin: "10px",
                        }}
                      />
                    </Link>
                  </Flex>
                </Box>
              </Box>
            </Box>
          </Box>
        </>
      ) : (
        <div style={{ marginTop: "6rem" }}>
          <Flex>
            <UnorderedList className="lowerBar">
              <NavLink
                to="/categories/men"
                style={{
                  textDecoration: "none",
                  color: "black",
                  cursor: "pointer",
                }}
              >
                <ListItem style={{ cursor: "pointer" }}>MEN</ListItem>
              </NavLink>
              <NavLink
                to="/categories/women"
                style={{ textDecoration: "none", color: "black" }}
              >
                <ListItem>WOMEN</ListItem>
              </NavLink>
              <NavLink
                to="/NotAvailable"
                style={{ textDecoration: "none", color: "black" }}
              >
                <ListItem>ACCESSORIES</ListItem>
              </NavLink>
              <NavLink
                to="/brand/men/official marvel merchandise"
                style={{ color: "black", textDecoration: "none" }}
              >
                <ListItem>BWKF X MARVELS</ListItem>
              </NavLink>
              <NavLink
                to="/brand/men/official disney merchandise"
                style={{ color: "black", textDecoration: "none" }}
              >
                <ListItem>BWKF X DISNEY</ListItem>
              </NavLink>
              <NavLink
                to="/subcategories/men/sweater"
                style={{ color: "black", textDecoration: "none" }}
              >
                <ListItem>WINTER</ListItem>
              </NavLink>
              <NavLink
                to="subcategories/women/jumpsuit"
                style={{ color: "black", textDecoration: "none" }}
              >
                <ListItem>DRESSES</ListItem>
              </NavLink>
            </UnorderedList>
          </Flex>
          <Box>
            <NavLink to="/categoris/men">
              <img src={banner} style={{ width: "99vw", height: "auto" }} />
            </NavLink>

            <div className="swiper-slider">
              <div
                className="swiper-slide-container"
                style={{ transform: `translateX(${translateValue}%)` }}
              >
                {data.map((url, index) => (
                  <div
                    key={index}
                    className={
                      index === currentIndex
                        ? "swiper-slide active"
                        : "swiper-slide"
                    }
                  >
                    <img src={url} alt={`Slide ${index}`} />
                  </div>
                ))}
              </div>
            </div>
            <div class="headingbb">
              <span class="headingname">NEW ARRIVALS</span>
            </div>
            <ImageSlider />
           
          </Box>

          <Box>
          <div class="numbr-one-banner">
              <img
                src="https://www.beyoung.in/api/catalog/homepage-3-10/desktop/number-1-strip-banner/1.jpg"
                data-src="https://www.beyoung.in/api/catalog/homepage-3-10/desktop/number-1-strip-banner/1.jpg"
                alt="बीयंग भारत ka No. 1 Everyday Fashion Brand"
                title="बीयंग भारत ka No. 1 Everyday Fashion Brand"
              />

              <img
                src="https://www.beyoung.in/api/catalog/homepage-3-10/desktop/desktop-width/brand-icons-less-width.png"
                style={{marginTop: "30px"}}
                alt="beyoung strip"
                title="beyoung strip"
                data-src="https://www.beyoung.in/api/catalog/homepage-3-10/desktop/desktop-width/brand-icons-less-width.png"
              />
            </div>
          </Box>
        
          <div className="stripe">
           <img  src="https://www.beyoung.in/api/catalog/homepage-3-10/desktop/strip/strip.jpg" data-src="https://www.beyoung.in/api/catalog/homepage-3-10/desktop/strip/strip.jpg" alt="beyoung shopping" />
            </div>
          
          <Box style={{ marginLeft: "50px", marginBottom: "150px", marginTop:"100px" }}>
            <h3 style={headingStyle}>TRENDING CATEGORIES</h3>
            <Flex style={{ marginBottom: "20px" }}>
              <Link to="/subcategories/men/tshirt">
                <img
                  src={tshirt}
                  alt="tshirt"
                  style={{ width: "80%", marginRight: "10px" }}
                 
                />
              </Link>
              <Link to="/subcategories/men/shorts">
                <img
                  src={shorts}
                  alt="shorts"
                  style={{ width: "80%", marginRight: "10px" }}
                />
              </Link>
              <Link to="/subcategories/men/jogger">
                <img
                  src={joggers}
                  alt="joggers"
                  style={{ width: "80%", marginRight: "10px" }}
                />
              </Link>
              <Link to="/subcategories/men/shirt">
                <img
                  src={shirts}
                  alt="shirts"
                  style={{
                    width: "80%",
                    marginTop: "-4px",
                    marginRight: "10px",
                  }}
                />
              </Link>
              <Link to="/subcategories/men/pyjamas">
                <img
                  src={pyjama}
                  alt="pyjama"
                  style={{ width: "80%", marginRight: "10px" }}
                />
              </Link>
              <Link to="/subcategories/men/tshirt">
                <img
                  src={oversized}
                  alt="oversized"
                  style={{
                    width: "80%",
                    marginRight: "10px",
                    marginTop: "-4px",
                  }}
                />
              </Link>
            </Flex>
            <Flex>
              <Link to="/subcategories/women/tshirt">
                <img
                  src={women1}
                  alt="tshirt"
                  style={{ width: "80%", marginRight: "15px" }}
                />
              </Link>
              <Link to="/subcategories/women/shirt">
                <img
                  src={women2}
                  alt="shorts"
                  style={{
                    width: "80%",
                    marginRight: "15px",
                    marginTop: "3px",
                  }}
                />
              </Link>
              <Link to="/subcategories/women/jogger">
                <img
                  src={women3}
                  alt="joggers"
                  style={{ width: "80%", marginRight: "15px" }}
                />
              </Link>
              <Link to="/subcategories/women/jumpsuit">
                <img
                  src={women4}
                  alt="dress"
                  style={{ width: "80%", marginRight: "15px" }}
                />
              </Link>
              <Link to="/subcategories/women/jogger">
                <img
                  src={women5}
                  alt="pyjama"
                  style={{ width: "80%", marginRight: "15px" }}
                />
              </Link>
              <Link to="/subcategories/women/tshirt">
                <img
                  src={women6}
                  alt="oversized"
                  style={{ width: "80%", marginRight: "15px" }}
                />
              </Link>
            </Flex>
          </Box>
          <Box>
              <img
                src="https://www.beyoung.in/api/catalog/homepage-3-10/desktop/strip/scrolling-strip.jpg"
                alt="beyoung"
                style={{ width: "100%" }}
              />
           
          </Box>
          <Footer />
        </div>
      )}
    </>
  );
}