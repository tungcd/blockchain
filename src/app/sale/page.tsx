/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */
"use client";
import { useState } from "react";
import Link from "next/link";
import "../../asset/styles/index.scss";
import CopyToClipboard from "@/components/CopyToClipboard";
import RealtimeClock from "@/components/RealtimeClock";
import { usePathname, useRouter } from "next/navigation";
import { Modal, Box } from "@mui/material";
import { styleModal } from "../page";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
export default function Sale() {
  const router = useRouter();
  const [list, setList] = useState([1, 2, 3, 4, 5]);
  const [open, setOpen] = useState(false);
  const [sideBar, setSideBar] = useState(false);
  const handleOpen = () => setOpen(true);
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
      <div className="container_sale max-w-[1440px] m-auto pb-[300px] sm:max-md:max-md:pb-0 sm:max-md:max-md:w-[100vw] sm:max-md:max-md:overflow-hidden">
        <div className="container_page_1 h-[900px] md:max-xl:w-[100vw] sm:max-md:h-[600px]  text-[#F3F3F3] pt-[50px] sm:max-md:pt-[30px]">
          <div className="menu h-[70px] w-[1144px] md:max-xl:w-[90vw] sm:max-md:gap-x-1 sm:max-md:w-[95vw] m-auto flex  align-baseline justify-between ">
            <div className="hidden sm:max-md:block pt-2">
              <MenuIcon onClick={() => setSideBar(true)} />
            </div>
            <img
              onClick={() => router.push("/")}
              className="cursor-pointer sm:max-md"
              src="/image/logo.png"
            />
            <div className="flex gap-x-10 items-center  sm:max-md:hidden">
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
              className="bg_icon_memu rounded-3xl h-[45px] sm:max-md:text-[13px] pl-4 pr-4 text-[16px] font-bold font-[#F3F3F3]"
            >
              Connect Wallet
            </button>
          </div>
          <div className="page_1">
            <div className="text-[96px] md:max-xl:text-[60px] sm:max-md:mt-0 sm:max-md:text-[36px] sm:max-md:tracking-[0px] font-extrabold tracking-[5px] leading-[113px] w-fit m-auto gradient_text mt-14">
              SUIHUB PRESALE
            </div>
            <div className="wrap_image flex justify-center">
              <div className="sale_page1 sm:max-md:mt-[-100px] sm:max-md:pt-5 sm:max-md:scale-[.5]  mt-6 border border-[#3C9EFF] rounded-[32px] flex flex-col justify-center items-center gap-y-4 w-[772px] h-[613px] m-auto">
                <div className="font-semibold text-[36px] sm:max-md:text-[40px] leading-[42px]">
                  ROUND 1
                </div>
                <div className="font-medium text-xl sm:max-md:text-[28px]">
                  START IN
                </div>
                <div className="flex gap-x-[6px] justify-center">
                  <RealtimeClock />
                </div>
                <div className="font-medium text-xl sm:max-md:text-[28px] text-[#3BA3FF] letter__spacing ">
                  PRICE: 1 SUI = 150 SHT
                </div>
                <div className="progress-wrapper sm:max-md:">
                  <div className="progress-bar" style={{ width: "80%" }} />
                </div>
                <div className="flex justify-between w-full">
                  <p className="text-base sm:max-md:text-[22px] letter__spacing ">
                    7,343,5323 SHT
                  </p>
                  <p className="text-base sm:max-md:text-[22px] letter__spacing ">
                    40,000,000 SHT
                  </p>
                </div>
                <div className="relative">
                  <p className="font-semibold sm:max-md:text-[30px] text-2xl">
                    Amount{" "}
                  </p>
                  <input
                    className="input_price bg-[none] w-[573px] h-[56px] rounded-[32px] mt-4 "
                    type="number"
                    placeholder="0.0"
                  />
                  <button className="absolute right-5 bottom-3 font-semibold text-2xl text-[#3BA3FF] hover:text-[#5637bb]">
                    MAX
                  </button>
                </div>
                <button className="button_gradient m-auto mt-5 scale-125">
                  Connect Wallet
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="container_page_2 md:max-xl:w-[90vw] container_page_2_sale sm:max-md:w-[100vw] m-auto w-[971px] text-xl leading-[130%] letter__spacing text-[#F3F3F3] mt-[100px]">
          <div
            className="flex 
         
           justify-between border_botton_style  h-[54px] items-center"
          >
            <p>Presale Address</p>
            <CopyToClipboard text="0x5f5b4d8ebe98cava9ebb660c40ef440b3f1cb693" />
          </div>
          <div className="flex justify-between border_botton_style  h-[54px] items-center">
            <p>Token name</p>
            <p>SuiHub Token</p>
          </div>
          <div className="flex justify-between border_botton_style  h-[54px] items-center">
            <p>Token Symbol</p>
            <p>SHT</p>
          </div>
          <div className="flex justify-between border_botton_style  h-[54px] items-center">
            <p>Token Decimals</p>
            <p>29</p>
          </div>
          <div className="flex justify-between border_botton_style h-[72px] items-start pt-[14px]">
            <p>Token Address</p>
            <div className="flex flex-col items-end">
              <CopyToClipboard text="0x5f5b4d8ebe98cava9ebb660c40ef440b3f1cb693" />
              <p className="text-[12px]  text_CopyToClipboard leading-[130%]">{`(Do not send SUI to the token address!)`}</p>
            </div>
          </div>
          <div className="flex justify-between border_botton_style  h-[54px] items-center">
            <p>Token Supply</p>
            <p>800,000,000 SHT</p>
          </div>
          <div className="flex justify-between border_botton_style  h-[54px] items-center">
            <p>Tokens For Presale</p>
            <p>40,000,000 SHT </p>
          </div>
          <div className="flex justify-between border_botton_style  h-[54px] items-center">
            <p>Hard Cap</p>
            <p>266,666 SUI</p>
          </div>
          <div className="flex justify-between border_botton_style  h-[54px] items-center">
            <p>Presale Start Time</p>
            <p>
              2023.01.06 <br className="hidden sm:max-md:block" />
              00:00 (UTC)
            </p>
          </div>
          <div className="flex justify-between border_botton_style  h-[54px] items-center">
            <p>Presale End Time</p>
            <p>
              2023.01.06 <br className="hidden sm:max-md:block" /> 00:00 (UTC)
            </p>
          </div>
          <div className="flex justify-between border_botton_style  h-[54px] items-center">
            <p className="text_CopyToClipboard">Round 2 Presale End Time</p>
            <p>
              2023.10.06 <br className="hidden sm:max-md:block" /> 00:00 (UTC)
            </p>
          </div>
          <div className="flex justify-between border_botton_style  h-[54px] items-center">
            <p>Min Buy</p>
            <p>50 SUI</p>
          </div>
          <div className="flex justify-between border_botton_style  h-[54px] items-center">
            <p>Max Buy</p>
            <p>500 SUI</p>
          </div>
          <div className="flex justify-between border_botton_style  h-[54px] items-center">
            <p>Liquidity Percent</p>
            <p>51%</p>
          </div>
          <div className="flex justify-between border_botton_style  h-[54px] items-center">
            <p>Listing On</p>
            <p className="gradient_text">SuiHub</p>
          </div>
        </div>
        <div className="container_page_3 md:max-xl:w-[90vw] container_page_3_sale m-auto w-[971px] text-xl  letter__spacing text-[#F3F3F3] mt-[50px]">
          <div className="text-[48px] sm:max-md:text-[36px] font-bold tracking-[5px] gradient_text w-fit leading-[normal]">
            Affiliate Program
          </div>
          <div className="sm:max-md:text-[14px] flex justify-between bg-[#1B1C31] items-center pl-6 pr-6 border border-[#3BA3FF] h-[56px] rounded-[32px] mt-6">
            <p className="letter__spacing">Your referral Code</p>
            <CopyToClipboard text="2912312" />
          </div>
          <div className="sm:max-md:text-[14px] flex justify-between bg-[#1B1C31] items-center pl-6 pr-6 border border-[#3BA3FF] h-[56px] rounded-[32px] mt-6">
            <p className="letter__spacing">Your referral Link</p>
            <CopyToClipboard text="http://suihub.com/ref/2912312" />
          </div>

          <div className="flex justify-between mt-10 sm:max-md:flex-col">
            <div className="w-[40%] sm:max-md:w-[100%]">
              <div className="flex justify-between items-center mt-2">
                <p className="letter__spacing">Invited</p>
                <div className="letter__spacing gradient_text flex gap-x-3">
                  123
                  <img
                    className="w-[26px] h-[26px]"
                    src="image/suicoin_2.png"
                  />
                </div>
              </div>
              <div className="flex justify-between items-center  mt-9">
                <p className="letter__spacing">Amount</p>
                <div className="letter__spacing gradient_text flex gap-x-3">
                  123 SHT
                  <img
                    className="w-[26px] h-[26px]"
                    src="image/suicoin_2.png"
                  />
                </div>
              </div>
              <div className="flex justify-between items-center  mt-9">
                <p className="letter__spacing">Reward</p>
                <div className="letter__spacing gradient_text flex gap-x-3">
                  123 SUI
                  <img
                    className="w-[26px] h-[26px] "
                    src="image/suicoin_2.png"
                  />
                </div>
              </div>
            </div>
            <div className="w-[49%] sm:max-md:w-[100%] sm:max-md:mt-10">
              <p className="text-[#3BA3FF] text-2xl font-semibold tracking-normal">{`Here's how to earn 10% from Affiliate Program`}</p>
              <p className="text-xl font-normal tracking-normal mt-6 letter__spacing">
                1. Share your unique referral link with your friends and family.
                You can share it via email, social media, or any other way you
                like.
              </p>
              <p className="text-xl font-normal tracking-normal mt-6 letter__spacing">
                2. When your friend clicks on your referral link, they will be
                taken to the sign-up page for SUIHUB Network. After they sign up
                using your referral link, they will be automatically added to
                your referral list.
              </p>
              <p className="text-xl font-normal tracking-normal mt-6 letter__spacing">
                3. Once your friends join SUIHUB presale, you will also earn 10%
                of total $SHT token they bought from SUIHUB Affiliate Program
              </p>
            </div>
          </div>

          <div className="mt-[50px]">
            <div className="sm:max-md:text-[36px] text-[48px] font-bold tracking-[5px] gradient_text w-fit leading-[normal]">
              Your Rewards
            </div>
            <div className="flex justify-between mt-3">
              <div className="font-semibold text-2xl sm:max-md:text-[18px] md:max-xl:w-[40%] sm:max-md:w-[40%]">
                User
              </div>
              <div className="font-semibold text-2xl sm:max-md:text-[18px] md:max-xl:w-[30%] sm:max-md:w-[30%]">
                Amount (SHT)
              </div>
              <div className="font-semibold text-2xl sm:max-md:text-[18px] md:max-xl:w-[30%] sm:max-md:w-[30%] text-right sm:max-xl:pr-2 pr-5">
                Reward (SUI)
              </div>
            </div>
            {list.map((i) => (
              <div
                key={i}
                className="flex justify-between mt-3 border_botton_style h-[54px] items-center"
              >
                <div className="font-normal text-2xl sm:max-md:text-[16px] w-[30%] md:max-xl:w-[40%] sm:max-md:w-[40%]">
                  <CopyToClipboard text="0x77C5...F5a2" isGradient={false} />
                </div>
                <div className="font-normal text-2xl sm:max-md:text-[16px] w-[30%] md:max-xl:w-[30%] sm:max-md:w-[30%]">
                  2.687238 (15,58%)
                </div>
                <div className="font-normal text-2xl sm:max-md:text-[16px] w-[40%] md:max-xl:w-[30%] sm:max-md:w-[20%] text-right ">
                  0.751514
                </div>
              </div>
            ))}
            <button
              onClick={() => setList([1, 2, 3, 4, 5, 6, 7, 8, 9, 0])}
              className="text-[16px] underline text-[#3BA3FF] m-auto mt-4 block"
            >
              View all
            </button>
          </div>
        </div>

        <div className="hidden container_page_8 mt-[150px] gap-x-7 flex relative w-[1170px] m-auto h-[376px] text-[#F3F3F3] rounded-[32px] border border-[#3C9EFF]">
          <img
            className="w-[513px] h-[466px] sm:max-md:h-[430px]  mt-[-50px] ml-[-58px]"
            src="image/footer.png"
          />
          <div className="flex flex-col justify-center gap-y-4">
            <p className="text-xl font-medium gradient_text w-fit letter__spacing">
              STAY TUNED FOR NEW DAPPS ON SUI
            </p>
            <p className="text-[64px] font-extrabold tracking-[5px] leading-[75px]">
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
              <p className="ml-2 text-[20px] tracking-[0.12rem]">
                People have joined
              </p>
              <img
                className="image_filter_blur w-[50px] h-[60px] ml-2 mt-[20px] rotate-12 absolute right-[-40px] top-[20px]"
                src="image/suicoin_2.png"
              />
            </div>
            <div className="flex gap-x-[17px]">
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
            className="h-[113px] right-[-40px] top-[315px] absolute z-10 rotate-[15deg]"
            src="image/suicoin_2.png"
          />
          <img
            className="h-[113px] right-[-40px] top-[-40px] absolute z-10"
            src="image/suicoin_2.png"
          />
          <div className="drop__filer h-[300px] w-[300px] absolute left-[-100px] top-[240px] z-0 opacity-90"></div>
          <div className="drop__filer h-[300px] w-[300px] absolute right-[-300px] top-[-200px] z-0 opacity-90"></div>
        </div>

        <div className="md:max-lg:scale-[.6] lg:max-xl:scale-[.75] lg:max-xl:ml-[-5%] md:max-lg:ml-[-15%] sm:max-md:items-baseline mt-[150px] sm:max-md:h-[auto] sm:max-md:w-[100vw] sm:max-md:h-[550px] sm:max-md:overflow-hidden  sm:max-md:flex  sm:max-md:flex-col">
          <div className="style_footer sm:max-md:w-[100vw]  sm:max-md:h-[unset] sm:max-md:flex-col sm:max-md:scale-[.85] container_page_8 gap-x-7 flex relative w-[1170px] m-auto h-[376px] text-[#F3F3F3] rounded-[32px] border border-[#3BA3FF]">
            <img
              className="z-50 w-[513px] h-[466px] sm:max-md:h-[430px] sm:max-md:ml-0 mt-[-50px] ml-[-58px]"
              src="image/footer.png"
            />
            <div className="flex flex-col justify-center gap-y-4">
              <p className="sm:max-md:tracking-[0px !important] md:max-lg:text-[24px] sm:max-md:text-xl text-xl font-medium gradient_text w-fit letter__spacing">
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
