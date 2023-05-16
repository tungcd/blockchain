/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */
"use client";

import "../asset/styles/index.scss";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
export const styleModal = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 574,
  height: 421,
  bgcolor: "#15162D",
  border: "1px solid #3BA3FF",
  borderRadius: "32px",
  color: "#F3F3F3",
  padding: "35px 24px",
};
export default function Home() {
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const [sideBar, setSideBar] = useState(false);
  const handleClose = () => setOpen(false);
  return (
    <>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={styleModal}>
          <div className="font-semibold text-[36px] gradient_text w-fit m-auto">
            Connect Wallet
          </div>
          <p className="font-normal text-xl letter__spacing mt-4">
            Start by connecting with one of wallets below.
          </p>
          <p className="font-normal text-xl letter__spacing mt-2">
            Be sure to store your private keys or seed phrase securely. Never
            share them with anynone
          </p>
          <div className="flex justify-around mt-7">
            <div className="flex flex-col justify-center items-center">
              <img
                onClick={() => console.log("click")}
                className="w-[64px] cursor-pointer hover:scale-110"
                src="image/wallet1.png"
              />
              <p className="mt-2">Martian Wallet</p>
            </div>
            <div className="flex flex-col justify-center items-center">
              <img
                onClick={() => console.log("click")}
                className="w-[64px] cursor-pointer hover:scale-110"
                src="image/wallet2.png"
              />
              <p className="mt-2">Sui Wallet</p>
            </div>
            <div className="flex flex-col justify-center items-center">
              <img
                onClick={() => console.log("click")}
                className="w-[64px] cursor-pointer hover:scale-110"
                src="image/wallet3.png"
              />
              <p className="mt-2">Suiet Wallet</p>
            </div>
          </div>
        </Box>
      </Modal>
      {sideBar && (
        <div className="fixed hidden sm:max-md:block w-[50vw] h-[100vh] modal_sidebar pt-10 pl-5 pr-5">
          <div className="float-right">
            <CloseIcon onClick={() => setSideBar(false)} />
          </div>
          <ul className=" mt-9">
            <li className="mt-4">
              <Link href={"/"}>Product</Link>
            </li>
            <li className="mt-4">
              <Link href={"/pitchdesk"}>Pitchdesk</Link>
            </li>
            <li className="mt-4">
              <Link href={"/sale"}>Whitepaper</Link>
            </li>
          </ul>
        </div>
      )}
      <div className="max-w-[1440px] m-auto lg:max-xl:overflow-hidden pb-[300px] sm:max-md:pb-0 sm:max-md:w-[100vw] sm:max-md:overflow-hidden">
        <div className="container_page_1 h-[900px]  sm:max-md:h-[600px]  text-[#F3F3F3] pt-[50px] sm:max-md:pt-[30px]">
          <div className="menu h-[70px] w-[1144px] md:max-xl:w-[90vw]  sm:max-md:w-[95vw] m-auto flex align-baseline justify-between ">
            <div className="hidden sm:max-md:block pt-2">
              <MenuIcon onClick={() => setSideBar(true)} />
            </div>
            <img
              onClick={() => router.push("/")}
              className="cursor-pointer sm:max-md"
              src="/image/logo.png"
            />
            <div className="flex gap-x-10 items-center sm:max-md:hidden">
              <Link
                className={`${usePathname() === "/" && "text-[#3BA3FF]"}`}
                href={"/"}
              >
                Product
              </Link>
              <Link
                className={`${
                  usePathname() === "/pitchdesk" && "text-[#3BA3FF]"
                }`}
                href={"/pitchdesk"}
              >
                Pitchdesk
              </Link>
              <Link
                className={`${usePathname() === "/sale" && "text-[#3BA3FF]"}`}
                href={"/sale"}
              >
                Whitepaper
              </Link>
            </div>
            <button
              onClick={() => setOpen(true)}
              className="bg_icon_memu rounded-3xl h-[45px] pl-4 pr-4 text-[16px] font-bold font-[#F3F3F3]"
            >
              PRESALE
            </button>
          </div>
          <div className="page_1">
            <div className="text-[96px] sm:text-[30px] font-extrabold tracking-[5px] leading-[113px] w-fit m-auto gradient_text mt-14">
              SUIHUB NETWORK
            </div>
            <div className="wrap_image">
              <img
                className="xl:w-[730px] sm:w-[375px] m-auto"
                src="/image/page_1.png"
              />
              <img
                className="xl:w-[186px] m-auto xl:mt-[-550px] sm:w-[100px] sm:mt-[-300px]"
                src="/image/suicoin.png"
              />
            </div>
          </div>
        </div>

        <div className="container_page_2 sm:max-md:h-[1100px]">
          <div className="text-[#fff] font-extrabold xl:text-[64px] sm:text-[35px] text-center mt-[80px] tracking-[5px]">
            ABOUT SUIHUB
          </div>
          <div className="relative w-[822px] md:max-xl:w-[622px] sm:max-md:w-[300px] xl:h-[442px] sm:h-[200px] m-auto mt-12 ">
            <img
              className="xl:h-[273px] sm:h-[150px] sm:max-md:top-[6px] md:max-xl:top-[90px] sm:left-[-24px] absolute xl:left-[-44px] xl:top-[70px]"
              src="image/left.png"
            />
            <video
              poster={"image/banner_video.png"}
              src={
                "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
              }
              // controls
            ></video>
            <img
              src="image/right.png"
              className="xl:h-[273px] sm:h-[150px]  sm:top-[6px] md:max-xl:top-[90px] sm:right-[-24px] absolute xl:right-[-44px] xl:top-[70px]"
            />
            <img
              src="image/rubik_2.png"
              className="h-[140px] absolute left-[-160px] top-[-80px]  sm:max-md:h-[50px] sm:max-:top-[-20px] sm:max-md:left-[-60px]"
            />
          </div>
          <button className="button_gradient m-auto mt-11">Learn More</button>
          <div className="xl:flex-row flex gap-x-32 justify-center mt-20  sm:flex-col sm:items-center">
            <div className="xl:w-[474px] sm:w-[375px]">
              <p className="text-[64px]  md:max-xl:text-[48px] font-extrabold text-[#F3F3F3] sm:max-md:text-[30px] xl:text-left sm:text-center tracking-[5px]">
                SUIHUB FEATURES
              </p>
              <p className="gradient_text xl:text-[24px]  md:max-xl:text-[22px]  sm:text-[18px] xl:text-left sm:text-center font-normal text-[#F3F3F3]">
                SUI HUB is a must-have hub for anyone looking to be a part of
                the best Blockchain - SUI Blockchain.
              </p>
            </div>
            <div className="box_flex  md:max-xl:mt-[100px] w-[572px] h-[572px] flex relative flex-wrap justify-center sm:max-md:scale-50">
              <div className="w-[140px] box_flex_item">
                <img className="w-[140px]" src="image/AMM_DEX.png" />
                <p className="w-[140px] text-[#F3F3F3] text-2xl font-semibold mt-3 text-center">
                  AMM DEX
                </p>
              </div>
              <div className="w-[140px] box_flex_item">
                <img className="w-[140px]" src="image/NFT_Market.png" />
                <p className="w-[140px] text-[#F3F3F3] text-2xl font-semibold mt-3 text-center">
                  NFT Market
                </p>
              </div>
              <div className="w-[140px] box_flex_item">
                <img className="w-[140px]" src="image/Liquidity_Protocol.png" />
                <p className="w-[140px] text-[#F3F3F3] text-2xl font-semibold mt-3 text-center">
                  Liquidity Protocol
                </p>
              </div>
              <div className="w-[140px] box_flex_item">
                <img className="w-[140px]" src="image/AMM_DEX.png" />
                <p className="w-[140px] text-[#F3F3F3] text-2xl font-semibold mt-3 text-center">
                  AMM DEX
                </p>
              </div>

              <img
                src="image/Layer1.png"
                className="h-[112px] absolute right-[0px] top-[-80px]  z-10"
              />
              <img
                src="image/Layer2.png"
                className="h-[122px] absolute left-[-60px] top-[250px] z-10"
              />
              <img
                src="image/Layer3.png"
                className="h-[50px] absolute left-[-25px] top-[410px]  z-10"
              />
              <img
                src="image/Vector.png"
                className="h-[752px] w-[752px] absolute right-[-80px] top-[-200px] z-0 opacity-50"
              />
            </div>
          </div>
        </div>

        <div className="container_page_3">
          <div className="text-[#fff] font-extrabold text-[64px] md:max-xl:mt-16 sm:max-md:text-[#F3F3F3] sm:max-md:text-[36px] text-center xl:mt-[80px] tracking-[5px]">
            AMM DEX
          </div>
          <p className=" sm:max-md:text-[16px]  md:max-xl:text-[20px]  md:max-xl:text-center sm:max-md:w-[350px] sm:max-md:text-center max-w-[550px] tracking-[0.12rem] m-auto text-[#F3F3F3]  font-normal xl:text-[24px] xl:text-center mt-[0px]">
            Trade, earn, and win crypto on the most popular decentralized
            platform
          </p>
          <div className="w-[771px] md:max-lg:scale-[.75] h-[507px] relative m-auto mt-12 rounded-3xl sm:max-md:mt-[-90px] sm:max-md:scale-[0.4] sm:max-md:ml-[-40%]">
            <img
              className="w-[771px] h-[507px] absolute left-[0] top-[0] rounded-3xl z-20"
              src="image/parent.png"
            />
            <img
              className="w-[216px] h-[265px] absolute left-[30px] bottom-[-50px] rounded-3xl z-30"
              src="image/child.png"
            />
            <img
              src="image/Layer2.png"
              className="h-[80px] absolute left-[-70px] top-[0px] z-10 rotate-[-22deg] z-30"
            />
            <img
              src="image/Layer3.png"
              className="h-[100px] absolute right-[-50px] top-[65px] z-10 rotate-[-10deg] z-30"
            />
            <img
              className="w-[45px] absolute left-[510px] bottom-[-25px] rounded-3xl z-30"
              src="image/Layer2.png"
            />
            <img
              className="w-[75px] absolute right-[-28px] bottom-[-28px] rounded-3xl rotate-[40deg] z-30"
              src="image/Layer2.png"
            />
            <img
              src="image/Layer3.png"
              className="w-[45px] absolute left-[510px] bottom-[20px] z-10 rotate-[-46deg]  z-30"
            />
            <img
              src="image/Layer3.png"
              className="w-[30px] absolute left-[320px] bottom-[92px] z-0 rotate-[-46deg]  z-30"
            />
            <div className="drop__filer h-[345px] w-[345px] absolute right-[-100px] top-[0] z-0 opacity-90"></div>
          </div>
          <div className="text-[#fff] font-extrabold text-[64px] text-center mt-[100px] tracking-[5px] sm:max-md:mt-[0] sm:max-md:text-[36px]">
            NFT MARKETPLACE
          </div>
          <p className="max-w-[550px] tracking-[0.12rem] m-auto text-[#F3F3F3] font-normal text-[24px] sm:max-md:text-[16px] text-center mt-[0px]">
            Buy and Sell NFTs on Sui Blockchain
          </p>
          <div className="flex gap-x-6 gap-y-6 justify-center mt-10  sm:max-lg:flex-col sm:max-lg:items-center">
            {["image/cat.png", "image/panda.png", "image/cat.png"].map(
              (item, index) => (
                <div
                  key={`${item}_${index}`}
                  className="item w-[306px] h-[477px] bg-[#16172E] text-[#F3F3F3] sm:max-md:scale-75 sm:max-md:gap-y-0"
                >
                  <img className="h-[314px] w-[274px]" src={item} />
                  <div className="flex items-center justify-between mt-4">
                    <p className="text-[24px] font-semibold">SUI Me Outsite</p>
                    <div className="flex items-center h-[26px] p-[3px] gap-x-1 button_price">
                      <img
                        className="w-fit h-[18px] justify-around"
                        src="image/icon_price.png"
                      />
                      <p className="text-[14px]">1.3 SHT</p>
                    </div>
                  </div>
                  <p className="text-[20px] font-medium">
                    Current Bid 1.55 SHT
                  </p>
                  <div className="flex items-center justify-between mt-4">
                    <p className="gradient_text text-[20px] font-medium">
                      Place bid
                    </p>
                    <div className="flex items-center gap-x-3">
                      <img
                        className="h-[18px] w-[18px]"
                        src="image/heart.png"
                        alt="item"
                      />
                      <p className="text-[24px] font-semibold">140</p>
                    </div>
                  </div>
                </div>
              )
            )}
          </div>
        </div>

        <div className="container_page_4 pb-24 sm:max-md:pb-0">
          <div className="text-[#fff] font-extrabold text-[64px] text-center mt-[80px] tracking-[5px] relative z-10 sm:max-md:text-[36px]">
            LAUNCHPAD PROTOCOL
          </div>
          <p className="max-w-[550px] tracking-[0.12rem] m-auto text-[#F3F3F3]  relative z-10 font-normal text-[24px] text-center mt-[0px] sm:max-md:text-[16px]">
            The launchpad protocol for everyone on Sui Blockchain
          </p>
          <div className="w-[820px] md:max-lg:scale-75 h-[460px] relative m-auto mt-12 rounded-3xl sm:max-md:mt-[-50px] sm:max-md:scale-[.4]  sm:max-md:ml-[-50%]">
            <img
              className="w-[820px] h-[460px] absolute left-[0] top-[0] rounded-3xl z-20"
              src="image/image_page4.png"
            />
            <img
              src="image/Layer2.png"
              className="h-[80px] absolute left-[-60px] top-[-20px] z-10 rotate-[-22deg]"
            />
            <img
              src="image/Layer3.png"
              className="h-[100px] absolute right-[-50px] top-[65px] z-10 rotate-[-10deg]"
            />
            <img
              className="w-[75px] absolute right-[-20px] bottom-[-20px] rounded-3xl rotate-[40deg] z-30"
              src="image/Layer2.png"
            />
            <img
              src="image/Vector.png"
              className="h-[752px] w-[752px] absolute right-[-250px] top-[-200px] z-0 opacity-90"
            />
            <div className="drop__filer h-[345px] w-[345px] absolute right-[-200px] top-[0] z-0 opacity-90"></div>
            <div className="drop__filer h-[250px] w-[250px] absolute left-[-300px] top-[400px] z-0 opacity-90"></div>
          </div>
          <div className="text-[#fff] font-extrabold text-[64px] text-center mt-[80px] tracking-[5px] relative z-10 sm:max-md:mt-0 sm:max-md:text-[36px]">
            LIQUIDITY PROTOCOL
          </div>
          <p className="max-w-[550px] tracking-[0.12rem] m-auto text-[#F3F3F3]  relative z-10 font-normal text-[24px] sm:max-md:text-[16px] text-center mt-[0px]">
            Earn interest, borrow assets, and build applications
          </p>
          <div className="relative w-[594px] h-[637px] m-auto mt-10  sm:max-md:scale-[.6] sm:max-md:ml-[-22%]">
            <img className="absolute  z-10" src="image/image2_page4.png" />
            <div className="drop__filer h-[345px] w-[345px] absolute right-[20%] top-[30%] z-0 opacity-50"></div>
          </div>
        </div>

        <div className="container_page_5 pb-24 text-[#F3F3F3] sm:max-md:pb-0">
          <div className="text-[#fff] font-extrabold sm:max-md:text-[36px] sm:max-md:mt-0 sm:max-md:w-[350px] sm:max-md:m-auto text-[64px] w-[700px] m-auto text-center mt-[80px] tracking-[5px] relative z-10">
            WHY BE A PART OF SUI BLOCKCHAIN?
          </div>
          <p className="max-w-[1100px] tracking-[0.12rem] m-auto gradient_text sm:max-md:text-[16px] font-normal text-[24px] text-center mt-[0px]">
            SUI is a Layer 1 blockchain that utilizes Move language, parallel
            execution, and other innovations to create a fast, reliable, and
            scalable infrastructure for Web3 adoption.
          </p>
          <div className="flex items-center justify-center sm:max-md:flex-col sm:max-md:scale-[.75]">
            <img
              className="w-[540px] h-[480px] md:max-lg:w-[450px] md:max-lg:h-[unset]"
              src="image/page5_1.png"
            />
            <div className="w-[500px]  sm:max-md:w-[400px] mt-[-50px] relative">
              <div className="drop__filer h-[345px] w-[345px] absolute right-[-150px] bottom-[-150px] z-0 opacity-60"></div>
              <p className="gradient_text text-[36px] font-semibold w-fit">
                POTENTIAL
              </p>
              <ul
                className="text-[20px] pl-5"
                style={{ listStyleType: "disc" }}
              >
                <li>
                  Sui is backed by Mysten Labs - which was founded by former
                  senior executives at Meta’s Research.
                </li>
                <li>
                  Take the user experience to the next level, seamlessly, while
                  also enabling a wide range of next generation.
                </li>
              </ul>
            </div>
          </div>
          <div className="flex items-center justify-center flex-row-reverse sm:max-md:flex-col sm:max-md:scale-[.75]">
            <img
              className="w-[540px] h-[480px] md:max-lg:w-[450px] md:max-lg:h-[unset]"
              src="image/page5_2.png"
            />
            <div className="w-[500px] sm:max-md:w-[400px] mt-[-50px]">
              <p className="gradient_text text-[36px] font-semibold w-fit">
                PARALLEL EXECUTION
              </p>
              <ul
                className="text-[20px] pl-5"
                style={{ listStyleType: "disc" }}
              >
                <li>Ethereum can handle 7–15 transactions/second</li>
                <li>Visa has a 24,000 transaction/second</li>
                <li>SUI canExecute up to 120,000 transactions per second</li>
              </ul>
            </div>
          </div>
          <div className="flex items-center justify-center gap-x-12 sm:max-md:flex-col sm:max-md:scale-[.75]">
            <img
              className="w-[355px] h-[389px] md:max-lg:w-[350px] md:max-lg:h-[unset]"
              src="image/page5_3.png"
            />
            <div className="w-[500px] mt-[0px] sm:max-md:w-[400px]">
              <p className="gradient_text text-[36px] font-semibold w-fit">
                GAS FEE
              </p>
              <ul
                className="text-[20px] pl-5"
                style={{ listStyleType: "disc" }}
              >
                <li>
                  {`Sui's epochs last 24 hours and are overseen by a validators'
                committee,`}
                </li>
                <li>Gas prices remaining stable within each epoch.</li>
              </ul>
            </div>
          </div>
          <div className="flex items-center justify-center flex-row-reverse  sm:max-md:flex-col sm:max-md:scale-[.75]">
            <img
              className="w-[368px] h-[368px] md:max-lg:w-[350px] md:max-lg:h-[unset]"
              src="image/page5_4.png"
            />
            <div className="w-[500px] sm:max-md:w-[400px] mt-[0px] relative">
              <div className="drop__filer h-[345px] w-[345px] absolute right-[-700px] bottom-[-150px] z-0 opacity-60"></div>
              <p className="gradient_text text-[36px] font-semibold w-fit ">
                IMPROVE WEB3 FEATURES
              </p>
              <ul
                className="text-[20px] pl-5"
                style={{ listStyleType: "disc" }}
              >
                <li>
                  On-chain DeFi and traditional finance (TradFi) primitives
                </li>
                <li>Reward and loyalty programs</li>
                <li>Complex games and business logic</li>
                <li>Asset tokenization services</li>
                <li>Decentralized social media networks</li>
                <li>Upgradable NFTs</li>
              </ul>
            </div>
          </div>
        </div>
        <div className=" sm:max-xl:w-[100vw] sm:max-xl:overflow-auto  sm:max-xl:flex  sm:max-xl:flex-col">
          <div className="container_page_6 overflow-hidden pb-24 text-[#F3F3F3] w-[1440px] sm:max-xl:scale-[.75] sm:max-md:ml-[-40%]">
            <div className="text-[#fff] font-extrabold text-[64px] text-center mt-[80px] tracking-[5px] relative z-10  sm:max-md:text-left sm:max-md:ml-5">
              ROAD MAP
            </div>
            <div className="flex gap-x-[430px] justify-end w-[92%] mt-9">
              <img className=" w-[253px] left-[40px]" src="image/Q1.png" />
              <img className=" w-[253px] right-[40px]" src="image/Q2.png" />
            </div>
            <div className="relative">
              <img
                className="absolute w-[1025px] right-[40px]"
                src="image/roadmap_timeline.png"
              />
              <div className="bg-hidden absolute rotate-180 right-0 w-[176px] h-[343px] bg-[linear-gradient(90deg, #000117 0%, rgba(10, 3, 30, 0) 87.5%)]"></div>
            </div>
            <div className="flex mt-14 gap-11 items-center w-fit ml-[134px] max-[1380px]:ml-[60px]">
              <p className="mr-6 gradient_text w-fit text-[36px] font-semibold ">
                FEATURES
              </p>
              <div className="flex flex-wrap gap-4 w-[645px]">
                <div className="item_roadmap tracking-[0.12rem] flex items-center pl-4 text-[20px] text-left font-medium h-[82px] bg-[#1B1C31] rounded-2xl">
                  AMM DEX
                </div>
                <div className="item_roadmap tracking-[0.12rem] flex items-center pl-4 text-[20px] text-left font-medium h-[82px] bg-[#1B1C31] rounded-2xl">
                  LAUNCHPAD PROTOCOL
                </div>
                <div className="item_roadmap tracking-[0.12rem] flex items-center pl-4 text-[20px] text-left font-medium h-[82px] bg-[#1B1C31] rounded-2xl">
                  LIQUIDITY PROTOCOL
                </div>
                <div className="item_roadmap tracking-[0.12rem] flex items-center pl-4 text-[20px] text-left font-medium h-[82px] bg-[#1B1C31] rounded-2xl">
                  NFT MARKET
                </div>
              </div>
              <div className="flex flex-wrap gap-4 w-[645px]">
                <div className="item_roadmap tracking-[0.12rem] flex items-center pl-4 text-[20px] text-left font-medium h-[82px] bg-[#1B1C31] rounded-2xl">
                  WALLET
                </div>
                <div className="item_roadmap tracking-[0.12rem] flex items-center pl-4 text-[20px] text-left font-medium h-[82px] bg-[#1B1C31] rounded-2xl">
                  LIQUIDITY PROTOCOL
                </div>
                <div className="item_roadmap tracking-[0.12rem] flex items-center pl-4 text-[20px] text-left font-medium h-[82px] bg-[#1B1C31] rounded-2xl">
                  STAKING
                </div>
                <div className="item_roadmap tracking-[0.12rem] flex items-center pl-4 text-[20px] text-left font-medium h-[82px] bg-[#1B1C31] rounded-2xl">
                  WALLET
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="TOKENOMICS lg:max-xl:scale-75 lg:max-xl:ml-[-5%] md:max-lg:scale-[.6] md:max-lg:ml-[-14%] md:max-lg:mt-[-90px] sm:max-md:hidden sm:max-md:w-[100vw] sm:max-md:overflow-auto  sm:max-md:flex  sm:max-md:flex-col">
          <div className="container_page_7 relative pb-24 text-[#F3F3F3] sm:max-md:scale-[.75]">
            <div className="text-[#fff] font-extrabold text-[64px] text-center tracking-[5px] relative z-10">
              TOKENOMICS
            </div>
            <div className=" w-[1170px] h-[940px] z-10 relative m-auto mt-8">
              <img
                className="h-[113px] right-[-50px] top-[270px] absolute z-10"
                src="image/suicoin_2.png"
              />
              <div className="absolute relative top-[20px] left-14">
                <img
                  className="h-[350px] absolute"
                  src="image/icon_token.png"
                />

                <img
                  className="h-[430px] absolute left-[-60px]"
                  src="image/Vector_icon_token.png"
                />
              </div>
              <div className="drop__filer h-[345px] w-[345px] absolute right-[-100px] bottom-[0] z-0 opacity-60"></div>

              {/* style */}
              <div className="w-[100%] h-[100%] rounded-[32px] border border-[#3C9EFF]"></div>
              <div className="flex justify-center items-center gap-x-5 border_style w-[50%] absolute right-[-1px] top-[-1px] h-[33%] ">
                <div className="flex flex-col gap-y-2 text-[20px] font-medium tracking-[0.12rem] ml-[-60px] mt-[30px]">
                  <div className="h-[36px]">Name:</div>
                  <div className="h-[36px]">Symbol:</div>
                  <div className="h-[36px]">Decimal:</div>
                  <div className="h-[36px]">Total Supply:</div>
                </div>
                <div className="flex flex-col gap-y-2 text-[24px] font-semibold text-[#3BA3FF] mt-[30px]">
                  <div>SuiHub Token</div>
                  <div>SHT</div>
                  <div>18</div>
                  <div>800.000.000</div>
                </div>
              </div>
              <div className="w-[35px] h-[35px] bg_normal absolute left-[553px] top-[-1px] "></div>
              <div className="w-[70px] h-[70px] div_hidden absolute left-[517px] top-[0px] ] "></div>
              <div className="w-[90px] h-[90px] div_hidden_2 absolute left-[496px] top-[1px] ] "></div>
              <div className="w-[800px] flex flex-col gap-y-5 left-[15%] p-[76px 55px 108px] absolute bottom-12 font-light">
                <div className="flex w-[986px] items-start gap-16">
                  <div className="w-[250px] flex justify-between text-[20px]">
                    <p>Public Sale</p>
                    <p>10%</p>
                  </div>
                  <p className="text-[24px] ">
                    TGE 20%; remaining vesting in 4 months
                  </p>
                </div>
                <div className="flex w-[986px]  items-start gap-16">
                  <div className="w-[250px] flex justify-between text-[20px]">
                    <p>Earning</p>
                    <p>32%</p>
                  </div>
                  <p className="text-[24px] ">
                    Reward for Liquidity Providers <br /> Vesting in 5 years
                  </p>
                </div>
                <div className="flex w-[986px] items-start gap-16">
                  <div className="w-[250px] flex justify-between text-[20px]">
                    <p>Core team</p>
                    <p>20%</p>
                  </div>
                  <p className="text-[24px]">
                    Locked in 6 months, vesting in 4 years
                  </p>
                </div>
                <div className="flex w-[986px] items-start gap-16">
                  <div className="w-[250px] flex justify-between text-[20px]">
                    <p>Partnership</p>
                    <p>10%</p>
                  </div>
                  <p className="text-[24px]">
                    Locked in 6 months, vesting in 4 years
                  </p>
                </div>
                <div className="flex w-[986px] items-start gap-16">
                  <div className="w-[250px] flex justify-between text-[20px]">
                    <p>Reserves</p>
                    <p>8%</p>
                  </div>
                  <p className="text-[24px]">Vesting in 3 years</p>
                </div>
                <div className="flex w-[986px] items-start gap-16">
                  <div className="w-[250px] flex justify-between text-[20px]">
                    <p>Ecosystem</p>
                    <p>8%</p>
                  </div>
                  <p className="text-[24px]">Vesting in 3 years</p>
                </div>
                <div className="flex w-[986px] items-start gap-16">
                  <div className="w-[250px] flex justify-between text-[20px]">
                    <p>Advisors</p>
                    <p>2%</p>
                  </div>
                  <p className="text-[24px]">
                    Locked in 6 months, vesting in 2 years
                  </p>
                </div>
                <div className="flex w-[986px] items-start gap-16">
                  <div className="w-[250px] flex justify-between text-[20px]">
                    <p>Liquidity Pool</p>
                    <p>10%</p>
                  </div>
                  <p className="text-[24px]">For Liquidity, TGE</p>
                </div>
              </div>
            </div>
            <img
              src="image/Vector.png"
              className="h-[500px] w-[500px] absolute left-[-200px] bottom-[-130px] z-0 opacity-50"
            />
          </div>
        </div>

        <div className="hidden sm:max-md:flex gap-y-12 sm:max-md:w-[100vw] sm:max-md:mt-[-70px] flex flex-col justify-center items-center mt-11 text-[#F3F3F3] sm:max-md:h-[940px] z-10 relative m-auto mt-8 scale-50 ">
          <div className="text-[#fff] font-extrabold text-[64px] text-center tracking-[5px] relative z-10">
            TOKENOMICS
          </div>
          <img className="h-[350px] " src="image/icon_token.png" />
          <div className="flex static justify-center items-center gap-x-5 border_style  right-[-1px] top-[-1px] h-[33%]">
            <div className="flex flex-col gap-y-2 text-[30px] font-medium tracking-[0.12rem] ml-[-60px] mt-[30px]">
              <div className="h-[36px]">Name:</div>
              <div className="h-[36px]">Symbol:</div>
              <div className="h-[36px]">Decimal:</div>
              <div className="h-[36px]">Total Supply:</div>
            </div>
            <div className="flex flex-col gap-y-2 text-[24px] font-semibold text-[#3BA3FF] mt-[30px]">
              <div>SuiHub Token</div>
              <div>SHT</div>
              <div>18</div>
              <div>800.000.000</div>
            </div>
          </div>
          <div className="w-[190vw] flex flex-col gap-y-5 left-[15%] p-[76px 55px 108px]  bottom-12 font-light">
            <div className="flex w-[986px] items-start gap-16">
              <div className="w-[250px] flex justify-between text-[20px]">
                <p className="text-3xl">Public Sale</p>
                <p className="text-3xl">10%</p>
              </div>
              <p className="text-[24px]">
                TGE 20%; remaining vesting in 4 months
              </p>
            </div>
            <div className="flex w-[986px] items-start gap-16">
              <div className="w-[250px] flex justify-between text-[20px]">
                <p className="text-3xl">Earning</p>
                <p className="text-3xl">32%</p>
              </div>
              <p className="text-[24px]">
                Reward for Liquidity Providers <br />
                Vesting in 5 years
              </p>
            </div>
            <div className="flex w-[986px] items-start gap-16">
              <div className="w-[250px] flex justify-between text-[20px]">
                <p className="text-3xl">Core team</p>
                <p className="text-3xl">20%</p>
              </div>
              <p className="text-[24px]">
                Locked in 6 months, vesting in 4 years
              </p>
            </div>
            <div className="flex w-[986px] items-start gap-16">
              <div className="w-[250px] flex justify-between text-[20px]">
                <p className="text-3xl">Partnership</p>
                <p className="text-3xl">10%</p>
              </div>
              <p className="text-[24px]">
                Locked in 6 months, vesting in 4 years
              </p>
            </div>
            <div className="flex w-[986px] items-start gap-16">
              <div className="w-[250px] flex justify-between text-[20px]">
                <p className="text-3xl">Reserves</p>
                <p className="text-3xl">8%</p>
              </div>
              <p className="text-[24px]">Vesting in 3 years</p>
            </div>
            <div className="flex w-[986px] items-start gap-16">
              <div className="w-[250px] flex justify-between text-[20px]">
                <p className="text-3xl">Ecosystem</p>
                <p className="text-3xl">8%</p>
              </div>
              <p className="text-[24px]">Vesting in 3 years</p>
            </div>
            <div className="flex w-[986px] items-start gap-16">
              <div className="w-[250px] flex justify-between text-[20px]">
                <p className="text-3xl">Advisors</p>
                <p className="text-3xl">2%</p>
              </div>
              <p className="text-[24px]">
                Locked in 6 months, vesting in 2 years
              </p>
            </div>
            <div className="flex w-[986px] items-start gap-16">
              <div className="w-[250px] flex justify-between text-[20px]">
                <p className="text-3xl">Liquidity Pool</p>
                <p className="text-3xl">10%</p>
              </div>
              <p className="text-[24px]">For Liquidity, TGE</p>
            </div>
          </div>
        </div>

        <div className="md:max-lg:mt-[-20%] lg:max-xl:mt-[-10%] md:max-lg:scale-[.6] lg:max-xl:scale-[.75] lg:max-xl:ml-[-5%] md:max-lg:ml-[-15%] sm:max-md:items-baseline mt-[150px] sm:max-md:h-[auto] sm:max-md:w-[100vw] sm:max-md:h-[550px] sm:max-md:overflow-hidden  sm:max-md:flex  sm:max-md:flex-col">
          <div className="style_footer sm:max-md:w-[100vw]  sm:max-md:h-[unset] sm:max-md:flex-col sm:max-md:scale-[.85] container_page_8 gap-x-7 flex relative w-[1170px] m-auto h-[376px] text-[#F3F3F3] rounded-[32px] border border-[#3BA3FF]">
            <img
              className="z-50 w-[513px] h-[466px] sm:max-md:h-[430px] sm:max-md:ml-0 mt-[-50px] ml-[-58px]"
              src="image/footer.png"
            />
            <div className="flex flex-col justify-center gap-y-4">
              <p className="sm:max-md:tracking-[0px !important] sm:max-md:text-xl text-xl font-medium gradient_text w-fit letter__spacing">
                STAY TUNED FOR NEW DAPPS ON SUI
              </p>
              <p className="text-[64px] sm:max-md:text-[48px] font-extrabold tracking-[5px] leading-[75px]">
                Join Community
              </p>
              <div className="flex gap-x-[6px] items-end relative">
                {"241629".split("").map((i, index) => (
                  <div
                    className="w-[53px] h-[84px] bg-[#1B1C31] rounded-xl font-bold text-[48px] tracking-[5px] flex justify-center items-center"
                    key={index}
                  >
                    {i}
                  </div>
                ))}
                <p className=" sm:max-md:hidden ml-2 text-[20px] tracking-[0.12rem]">
                  People have joined
                </p>
                <img
                  className="image_filter_blur w-[50px] h-[60px] ml-2 mt-[20px] rotate-12 absolute right-[-40px] top-[20px]"
                  src="image/suicoin_2.png"
                />
              </div>
              <p className="hidden sm:max-md:block ml-2 text-[20px] tracking-[0.12rem]">
                People have joined
              </p>
              <div className="flex gap-x-[17px] sm:max-md:flex-col sm:max-md:items-center sm:max-md:gap-y-5">
                <Link
                  className="flex w-[178px] h-[50px] font-medium text-[20px] tracking-[0.12rem] justify-center items-center gap-x-3 rounded-3xl border border-[#3BA3FF] hover:text-[#3BA3FF]"
                  href="#"
                >
                  <img className="w-[24px] " src="/image/tele.png" />
                  Telegram
                </Link>
                <Link
                  className="flex w-[178px] h-[50px] font-medium text-[20px] tracking-[0.12rem] justify-center items-center gap-x-3 rounded-3xl border border-[#3BA3FF] hover:text-[#3BA3FF]"
                  href="#"
                >
                  <img className="w-[24px] " src="/image/discord.png" />
                  Discord
                </Link>
                <Link
                  className="flex w-[178px] h-[50px] font-medium text-[20px] tracking-[0.12rem] justify-center items-center gap-x-3 rounded-3xl border border-[#3BA3FF] hover:text-[#3BA3FF]"
                  href="#"
                >
                  <img className="w-[24px] " src="/image/twiter.png" />
                  Twitter
                </Link>
              </div>
            </div>
            <img
              className="h-[113px] sm:max-md:h-[90px] left-[-40px] top-[-40px] absolute z-10"
              src="image/suicoin_2.png"
            />
            <img
              className="h-[113px]  md:max-xl:bottom-[-60px] sm:max-md:h-[90px] sm:max-md:bottom-[-50px] right-[-40px] lg:top-[315px] absolute z-10 rotate-[15deg]"
              src="image/suicoin_2.png"
            />
            <img
              className="h-[113px] sm:max-md:h-[90px] right-[-40px] top-[-40px] absolute z-10"
              src="image/suicoin_2.png"
            />
            <div className="drop__filer h-[300px] w-[300px] absolute left-[-100px] top-[240px] z-0 opacity-90"></div>
          </div>
        </div>
      </div>
    </>
  );
}
