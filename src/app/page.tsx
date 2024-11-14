"use client";
import Header from "@/components/header";
import { useEffect, useState } from "react";
import { Transition } from "react-transition-group";
import { InView } from "react-intersection-observer";
import Image from "next/image";
export default function Home() {
  const [product, setProduct] = useState("MTI");
  const handleClick = (key: string) => {
    setProduct(key);
  };
  const scaleDefaultStyle = {
    opacity: 0,
    transform: "scale(0)",
  };
  const scaleTransitionStyles: any = {
    entering: { opacity: 1, transform: "scale(1)" },
    entered: { opacity: 1, transform: "scale(1)" },
    exiting: { opacity: 0, transform: "scale(0)" },
    exited: { opacity: 0, transform: "scale(0)" },
  };
  const scaleXDefaultStyle = {
    opacity: 0,
    transform: "scaleX(0)",
  };
  const scaleXTransitionStyles: any = {
    entering: { opacity: 1, transform: "scaleX(1)" },
    entered: { opacity: 1, transform: "scaleX(1)" },
    exiting: { opacity: 0, transform: "scaleX(0)" },
    exited: { opacity: 0, transform: "scaleX(0)" },
  };
  const menus = [
    {
      label: "公司概况",
      value: 1,
      id: "company",
    },
    {
      label: "核心产品",
      value: 2,
      id: "product",
    },
    {
      label: "管理团队",
      value: 3,
      id: "team",
    },
    {
      label: "联系我们",
      value: 4,
      id: "contact",
    },
  ];
  return (
    <div className=" min-h-[100%]">
      <Header />
      {/* 首页 */}
      <div
        id="home"
        className='relative md:pt-[171px] pt-[72px] md:pd-[224px] pb-[233px] w-full bg-[#111116] bg-no-repeat md:bg-[url("/images/banner-bg3-pc.png")] bg-[url("/images/banner-bg-mobile.png")] bg-cover md:bg-[length:1440px_600px] bg-center'
      >
        <div className="flex flex-col w-full md:items-center md:px-0 px-[50px]">
          <div className="md:text-[40px] md:text-center md:leading-[68px] text-[32px] leading-[50px]">
            <div>致力于为高净值客户解锁加密市场价值</div>
            <div>
              <span>助力开启数字时代的</span>
              <span className="text-gradient">财富新篇章</span>
            </div>
          </div>
          <div className="mt-[28px] md:mt-[36px] flex md:flex-row md:items-center md:justify-center flex-col item-start justify-start">
            <div className="flex items-center md:mx-[50px] md:mb-0 mb-[18px]">
              <Image
                src="/images/icon-banner1.png"
                width={24}
                height={24}
                className="w-[24px] h-[24px]"
                alt={""}
              />
              <span className="ml-[6px] text-[20px] leading-[20px] ">
                创新的数字资产配置方案
              </span>
            </div>
            <div className="flex items-center md:mx-[50px] md:mb-0 mb-[18px]">
              <Image
                src="/images/icon-banner2.png"
                width={24}
                height={24}
                className="w-[24px] h-[24px]"
                alt={""}
              />
              <span className="ml-[6px] text-[20px] leading-[20px]">
                优化收益与风险
              </span>
            </div>
            <div className="flex items-center md:mx-[50px] md:mb-0 mb-[18px]">
              <Image
                src="/images/icon-banner3.png"
                width={24}
                height={24}
                className="w-[24px] h-[24px]"
                alt={""}
              />
              <span className="ml-[6px] text-[20px] leading-[20px]">
                长期稳健增长
              </span>
            </div>
          </div>
        </div>
        <div className="hidden md:block absolute top-0 left-0 w-[681px] ">
          <Image
            width={681}
            height={572}
            className="w-full"
            src="/images/banner-bg1-pc.png"
            alt=""
          />
        </div>
        <div className="hidden md:block absolute right-0 bottom-0 w-[428px]">
          <Image
            width={428}
            height={392}
            className="w-full"
            src="/images/banner-bg2-pc.png"
            alt=""
          />
        </div>
        <div className="hidden md:block absolute w-full bottom-0 left-0 right-0 pt-[15.321%] bg-[url('/images/banner-bg5-pc.png')] bg-center-bottom bg-no-repeat bg-[length:855px_131px]">
          {/* <Image
            width={855}
            height={131}
            className="w-full"
            src="/images/banner-bg5-pc.png"
            alt=""
          /> */}
        </div>
        <div className="absolute flex justify-center md:bottom-[-76px] bottom-[-116px] left-0 right-0 md:px-[16px] px-[72px]">
          <div className="md:pt-[30px] pt-[24px] md:pb-[32px] pb-[40px] w-full max-w-[950px] md:rounded-[22px] rounded-[16px] border-solid border-[rgba(255,255,255,0.18)] md:border-[1px] border-[2px] bg-[#181743] bg-opacity-[0.6] md:backdrop-blur-[12px] backdrop-blur-[2px]">
            <div className="text-center md:text-[28px] text-[24px] md:leading-[40px] leading-[25px] md:mb-[20px] mb-[24px]">
              我们的合作伙伴
            </div>
            <div className="flex md:items-center justify-around md:px-[9%] md:flex-no-wrap flex-wrap md:px-0 px-[64px]">
              <div className="md:w-[108px] md:h-[30px] w-[172px] h-[48px] md:mb-0 mb-[36px]">
                <Image
                  width={172}
                  height={48}
                  src="/images/partner1.png"
                  className="w-full"
                  alt=""
                />
              </div>
              <div className="md:w-[141px] md:h-[30px] w-[224px] h-[48px] md:mb-0 mb-[36px]">
                <Image
                  width={224}
                  height={48}
                  src="/images/partner2.png"
                  className="w-full"
                  alt=""
                />
              </div>
              <div className="md:w-[71px] md:h-[21px] w-[110px] h-[32px]">
                <Image
                  width={110}
                  height={32}
                  src="/images/partner3.png"
                  className=""
                  alt=""
                />
              </div>
              <div className="md:w-[110px] md:h-[30px] w-[180px] h-[48px]">
                <Image
                  width={180}
                  height={48}
                  src="/images/partner4.png"
                  className=""
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* 公司 */}
      <div
        id="company"
        className="relative md:pt-[176px] pt-[196px] md:pb-[100px] pb-[80px] md:mx-0 mx-[40px] md:px-[16px]"
      >
        <div className="md:mb-[48px] mb-[60px] ">
          <div className="md:mb-[16px] mb-[8px] text-[32px] md:text-[40px] md:leading-[40px] text-center font-[600]">
            公司概况
          </div>
          <div className="mx-auto w-[56px] h-[4px] md:w-[80px] md:h-[6px] bg-gradient-to-r from-[#1EFB9C] via-[#5DD1FF] to-[#D36DFF]"></div>
        </div>
        <div className="relative max-w-[950px] md:mx-auto md:mb-[60px] mb-[64px]">
          <div className="md:flex mb-[48px]">
            <div className="mx-auto md:mx-0 mb-[16px] md:mb-0 md:flex md:flex-[0_0_63px] justify-center items-center md:w-[62px] md:h-[62px] w-[48px] h-[48px]">
              <Image
                width={62}
                height={62}
                src="/images/icon-group2.png"
                className="w-full h-full"
                alt=""
              />
            </div>
            <div className="md:ml-[24px] md:mr-0 text-[20px] leading-[33px]">
              1kB Capital
              成立于2021年2月，是一家持有BVI批准经理牌照的数字资产管理公司，具备合法管理基金和提供资产管理服务的资质。我们专注于为高净值投资者提供卓越的投资机会，并采用主观投资策略，通过深入研究加密货币和严格的风险管理，为客户带来长期稳定的回报。
            </div>
          </div>
          <div className="md:flex">
            <div className="mx-auto md:mx-0 mb-[16px] md:mb-0 md:flex md:flex-[0_0_63px] justify-center items-center md:w-[62px] md:h-[62px] w-[48px] h-[48px]">
              <Image
                width={62}
                height={62}
                src="/images/icon-group1.png"
                className="w-full h-full"
                alt=""
              />
            </div>
            <div className="md:ml-[24px] md:mr-0 text-[20px] leading-[33px]">
              我们的主观投资策略依赖于团队的市场洞察力，通过分析市场动态和基本面，灵活调整投资组合，旨在捕捉超额回报并控制风险。
            </div>
          </div>
        </div>
        <div className="max-w-[950px] mx-auto">
          <div className="relative grid grid-cols-2 md:gap-[20px] gap-[14px]">
            <div className="md:p-[24px] p-[16px] md:pt-[20px] border-[1px] border-solid border-[rgba(255,255,255,0.16)] rounded-[20px] bg-[#242333]">
              <div className="flex items-center justify-between mb-[12px]">
                <div className="md:text-[24px] md:leading-[33px] text-[28px] leading-[28px]">
                  01.多因子分析
                </div>
                <Image
                  width={40}
                  height={40}
                  className="md:w-[40px] md:h-[40px] w-[28px] h-[28px]"
                  src="/images/company1.png"
                  alt=""
                />
              </div>
              <div className="md:text-[17px] text-[20px] leading-[33px] text-white/[0.8]">
                自上而下，结合宏观环境、市场周期、交易数据和技术指标，全面分析大盘走势。
              </div>
            </div>
            <div className="md:p-[24px] p-[16px] md:pt-[20px] border-[1px] border-solid border-[rgba(255,255,255,0.16)] rounded-[20px] bg-[#242333]">
              <div className="flex items-center justify-between mb-[12px]">
                <div className="md:text-[24px] md:leading-[33px] text-[28px] leading-[28px]">
                  02.市场叙事
                </div>
                <Image
                  width={40}
                  height={40}
                  className="md:w-[40px] md:h-[40px] w-[28px] h-[28px]"
                  src="/images/company2.png"
                  alt=""
                />
              </div>
              <div className="md:text-[17px] text-[20px] leading-[33px] text-white/[0.8]">
                紧跟市场叙事，实时观察资金流向，提前预测赛道变化，研究项目基本面，筛选超越大盘的阿尔法机会。
              </div>
            </div>
            <div className="md:p-[24px] p-[16px] md:pt-[20px] border-[1px] border-solid border-[rgba(255,255,255,0.16)] rounded-[20px] bg-[#242333]">
              <div className="flex items-center justify-between mb-[12px]">
                <div className="md:text-[24px] md:leading-[33px] text-[28px] leading-[28px]">
                  03.风控机制
                </div>
                <Image
                  width={40}
                  height={40}
                  className="md:w-[40px] md:h-[40px] w-[28px] h-[28px]"
                  src="/images/company3.png"
                  alt=""
                />
              </div>
              <div className="md:text-[17px] text-[20px] leading-[33px] text-white/[0.8]">
                根据市场走势，交易合约数据和板块轮动规律，定期预判风险或右侧信号，及时调整仓位，以控制潜在回撤。
              </div>
            </div>
            <div className="md:p-[24px] p-[16px] md:pt-[20px] border-[1px] border-solid border-[rgba(255,255,255,0.16)] rounded-[20px] bg-[#242333]">
              <div className="flex items-center justify-between mb-[12px]">
                <div className="md:text-[24px] md:leading-[33px] text-[28px] leading-[28px]">
                  04.仓位管理
                </div>
                <Image
                  width={40}
                  height={40}
                  className="md:w-[40px] md:h-[40px] w-[28px] h-[28px]"
                  src="/images/company4.png"
                  alt=""
                />
              </div>
              <div className="md:text-[17px] text-[20px] leading-[33px] text-white/[0.8]">
                以右侧趋势策略为主，辅以左侧策略，分批建仓，逐步增持。
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* 产品 */}
      <div
        id="product"
        className="relative md:px-[16px] bg-[#111116] md:pt-[100px] pt-[80px] md:pb-[100px] pb-[80px] bg-blend-color-dodge md:bg-[url(/images/product-bg.png)] md:bg-[length:1440px_626px] md:bg-left-bottom bg-[url('/images/product-bg-mobile.png')] bg-[length:750px_490px] bg-right-bottom bg-no-repeat"
      >
        <div className="max-w-[950px] md:mx-auto mx-[40px]">
          <div className="mb-[48px]">
            <div className="transition md:mb-[16px] mb-[8px] md:text-[40px] text-[32px] leading-[40px] text-center font-[600]">
              核心产品
            </div>
            <div className="mx-auto w-[56px] h-[4px] md:w-[80px] md:h-[6px] bg-gradient-to-r from-[#1EFB9C] via-[#5DD1FF] to-[#D36DFF]"></div>
          </div>
          <div className="md:mb-[32px] mb-[64px] flex justify-center">
            <div
              onClick={() => handleClick("MTI")}
              className={`${
                product === "MTI"
                  ? "bg-[#D36DFF] text-black"
                  : "bg-white bg-opacity-[0.1] text-white"
              } md:w-[163px] w-[146px] md:h-[48px] h-[56px] mx-[15px] md:leading-[48px] leading-[56px] rounded-[36px] md:text-[24px] text-[28px] font-[600]  text-center cursor-pointer`}
            >
              MTI
            </div>
            <div
              onClick={() => handleClick("AI")}
              className={`${
                product === "AI"
                  ? "bg-[#D36DFF] text-black"
                  : "bg-white bg-opacity-[0.1] text-white"
              } md:w-[163px] w-[146px] md:h-[48px] h-[56px] mx-[15px] md:leading-[48px] leading-[56px] rounded-[36px] md:text-[24px] text-[28px] font-[600] text-center cursor-pointer`}
            >
              AI
            </div>
          </div>
          <div className="overflow-hidden">
            <div
              className={`flex transition-transform duration-200 ease-linear ${
                product === "MTI" ? "translate-x-0" : "translate-x-[-100%]"
              }`}
            >
              <div className="relative flex-[0_0_100%]">
                <div className="mb-[40px]">
                  <div className="md:mb-[12px] mb-[24px] md:text-[24px] text-[32px] md:leading-[24px] leading-[28px] text-title">
                    MTI (Momentum & Timing Investment)
                  </div>
                  <div className="md:text-[20px] text-[24px] leading-[33px] text-content">
                    趋势择时策略投资着眼于加密货币二级市场的现货零杠杆主动管理投资。MTI投资策略立足趋势跟踪和择时交易这两大原则，在行情行进中进行右侧操作。
                  </div>
                </div>
                <div className="flex w-full w-full md:flex-no-wrap flex-wrap">
                  <div className="relative md:w-[39%] w-[50%] flex flex-col md:mb-0 mb-[66px]">
                    <div className="md:text-[48px] text-[64px] md:leading-[40px] leading-[64px] text-title p-text-color1">
                      400
                      <span className="text-[36px] align-bottom leading-[50px] md:leading-[38px]">
                        %
                      </span>
                      <span className="text-[32px] align-bottom leading-[40px] md:leading-[30px]">
                        +
                      </span>
                    </div>
                    <div className="mt-[20px] text-[24px] leading-[33px]">
                      2021年-2024年跑赢BTC
                    </div>
                    <div className="hidden md:block p-divider"></div>
                  </div>
                  <div className="relative md:w-[39%] w-[50%] flex flex-col justify-center items-center md:mb-0 mb-[66px]">
                    <div className="md:text-[48px] text-[64px] md:leading-[40px] leading-[64px] text-title p-text-color2">
                      45
                      <span className="text-[36px] align-bottom leading-[50px] md:leading-[38px]">
                        %
                      </span>
                    </div>
                    <div className="mt-[20px] text-[24px] leading-[33px]">
                      复合年化收益率
                    </div>
                    <div className="hidden md:block p-divider"></div>
                  </div>
                  <div className="relative md:flex-1 w-[100%] flex flex-col md:justify-center md:items-center">
                    <div className="md:text-[48px] text-[64px] md:leading-[40px] leading-[64px] text-title p-text-color3">
                      22
                      <span className="text-[36px] align-bottom leading-[50px] md:leading-[38px]">
                        %
                      </span>
                    </div>
                    <div className="mt-[20px] text-[24px] leading-[33px]">
                      最大回撤
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative flex-[0_0_100%]">
                <div className="mb-[40px]">
		  <div className="md:mb-[12px] mb-[24px] md:text-[24px] text-[32px] md:leading-[24px] leading-[28px] text-title">
                    AI (Alts Investment)
                  </div>
                  <div className="md:text-[20px] text-[24px] leading-[33px] text-content">
                    山寨精选策略投资立足市场基本面，进行多元化的币种选择。投资组合覆盖前100主流币种与高增长潜力的非主流币种。通过配置多元化资产，在控制投资风险的前提下，获取更高的上涨空间，抓住牛市机遇，获得超过市场平均表现的超额收益。
                  </div>
                </div>
                <div className="flex w-full w-full md:flex-no-wrap flex-wrap">
                  <div className="relative md:w-[39%] w-[50%] flex flex-col md:mb-0 mb-[66px]">
                    <div className="md:text-[48px] text-[64px] md:leading-[40px] leading-[64px] text-title p-text-color1">
                      <span className="align-bottom">100</span>
                      <span className="text-[36px] align-bottom leading-[50px] md:leading-[38px]">
                        %
                      </span>
                      <span className="text-[32px] align-bottom leading-[40px] md:leading-[30px]">
                        +
                      </span>
                    </div>
                    <div className="mt-[20px] text-[24px] leading-[33px]">
                      2024年至今收益
                    </div>
                    <div className="hidden md:block p-divider"></div>
                  </div>
                  <div className="relative md:w-[39%] w-[50%] flex flex-col justify-center items-center md:mb-0 mb-[66px]">
                    <div className="md:text-[48px] text-[64px] md:leading-[40px] leading-[64px] text-title p-text-color2">
                      153
                      <span className="text-[36px] align-bottom leading-[50px] md:leading-[38px]">
                        %
                      </span>
                    </div>
                    <div className="mt-[20px] text-[24px] leading-[33px]">
                      复合年化收益率
                    </div>
                    <div className="hidden md:block p-divider"></div>
                  </div>
                  <div className="relative md:flex-1 w-[100%] flex flex-col md:justify-center md:items-center">
                    <div className="md:text-[48px] text-[64px] md:leading-[40px] leading-[64px] text-title p-text-color3">
                      21
                      <span className="text-[36px] align-bottom leading-[50px] md:leading-[38px]">
                        %
                      </span>
                    </div>
                    <div className="mt-[20px] text-[24px] leading-[33px]">
                      最大回撤
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* 团队 */}
      <div id="team" className="md:py-[100px] py-[80px] md:px-[16px]">
        <div className="max-w-[950px] md:mx-auto mx-[40px]">
          <div className="md:mb-[124px] mb-[88px]">
            <div className="md:mb-[16px] mb-[8px] md:text-[40px] text-[32px] leading-[40px] text-center font-[600]">
              管理团队
            </div>
            <div className="mx-auto md:w-[80px] w-[56px] md:h-[6px] h-[4px] bg-gradient-to-r from-[#1EFB9C] via-[#5DD1FF] to-[#D36DFF]"></div>
          </div>
          <div className="grid md:grid-cols-3 grid-cols-1 md:gap-[26px] gap-y-[88px]">
            <InView triggerOnce={true}>
              {({ inView, ref }) => {
                return (
                  <Transition in={inView} timeout={300}>
                    {(state) => {
                      return (
                        <div
                          ref={ref}
                          style={{
                            ...scaleDefaultStyle,
                            ...scaleTransitionStyles[state],
                          }}
                          className="transition h-full relative md:px-[24px] px-[32px] md:pt-[61px] pt-[80px] md:pb-[50px] pb-[40px] bg-[#242333] rounded-[20px] border-[1px] border-solid border-[rgba(255,255,255,0.16)]"
                        >
                          <div className="absolute md:top-[-64px] top-[-48px] md:left-[36px] left-[48px] md:w-[100px] md:h-[100px] w-[96px] h-[96px] rounded-full">
                            <Image
                              width={100}
                              height={100}
                              src="/images/team-people1.png"
                              className="w-full h-full"
                              alt=""
                            />
                          </div>
                          <div className="flex items-center md:mb-[12px] mb-[24px] md:justify-start justify-between">
                            <div className="md:text-[20px] text-[40px] md:leading-[28px] leading-[40px] mr-[16px]">
                              安东尼 Anthony Shen
                            </div>
                            <a
                              href="https://x.com/1kbxx"
                              target="_blank"
                              className="md:w-[32px] md:h-[32px] w-[48px] h-[48px] flex items-center justify-center bg-white bg-opacity-[0.11] rounded-full"
                            >
                              <Image
                                width={32}
                                height={32}
                                className="md:w-[16px] md:h-[16px] w-[24px] h-[24px]"
                                src="/images/icon-x.png"
                                alt=""
                              />
                            </a>
                          </div>
                          <div className="md:text-[16px] text-[24px] md:leading-[26px] leading-[40px] md:pb-[12px] pb-[24px] md:mb-[12px] mb-[24px] border-b-[1px] border-solid border-[rgba(255,255,255,0.12)]">
                            1kB Capital 创始人&基金经理
                            <br />
                            前 Amber Group 交易员
                            <br />
                            哥伦比亚大学金融工程硕士
                            <br />
                            加州大学欧文分校数学学士
                          </div>
                          <div className="md:text-[14px] text-[22px] md:leading-[26px] leading-[38px] text-content">
                            自2017年全职进入加密货币领域，经历了“94”、“312”、“519&rdquo;、LUNA崩盘及FTX破产等多次剧烈波动极端行情，擅长运用衍生品、套利和趋势跟踪策略，在币coin实盘交易中五年累计收益超200倍，具备出色的资产配置与风险管理能力。
                          </div>
                        </div>
                      );
                    }}
                  </Transition>
                );
              }}
            </InView>
            <InView triggerOnce={true} threshold={0}>
              {({ inView, ref }) => {
                return (
                  <Transition in={inView} timeout={300}>
                    {(state) => {
                      return (
                        <div
                          ref={ref}
                          style={{
                            ...scaleDefaultStyle,
                            ...scaleTransitionStyles[state],
                          }}
                          className="transition relative md:px-[24px] px-[32px] md:pt-[61px] pt-[80px] md:pb-[50px] pb-[40px] bg-[#242333] rounded-[20px] border-[1px] border-solid border-[rgba(255,255,255,0.16)]"
                        >
                          <div className="absolute md:top-[-64px] top-[-48px] md:left-[36px] left-[48px] md:w-[100px] md:h-[100px] w-[96px] h-[96px] rounded-full">
                            <Image
                              width={100}
                              height={100}
                              src="/images/team-people2.png"
                              className="w-full h-full"
                              alt=""
                            />
                          </div>
                          <div className="flex items-center md:mb-[12px] mb-[24px] md:justify-start justify-between">
                            <div className="md:text-[20px] text-[40px] md:leading-[28px] leading-[40px] mr-[16px]">
                              李炫Sean Li
                            </div>
                            <a
                              href="https://x.com/SL1000x"
                              target="_blank"
                              className="md:w-[32px] md:h-[32px] w-[48px] h-[48px] flex items-center justify-center bg-white bg-opacity-[0.11] rounded-full"
                            >
                              <Image
                                width={32}
                                height={32}
                                className="md:w-[16px] md:h-[16px] w-[24px] h-[24px]"
                                src="/images/icon-x.png"
                                alt=""
                              />
                            </a>
                          </div>
                          <div className="md:text-[16px] text-[24px] md:leading-[26px] leading-[40px] md:pb-[12px] pb-[24px] md:mb-[12px] mb-[24px] border-b-[1px] border-solid border-[rgba(255,255,255,0.12)]">
                            1kB Capital 合伙人&运营负责人
                            <br />
                            前Amber Group合伙人及流动性管理交易团队负责人
                            <br />
                            香港科技大学投资管理硕士
                            <br />
                            南加州大学会计学士
                          </div>
                          <div className="md:text-[14px] text-[22px] md:leading-[26px] leading-[38px] text-content">
                            自2017年进入加密货币领域，经历了“94”、“312”、“519&quot;、LUNA崩盘及FTX破产等多次剧烈波动极端行情，精通期现套利、价差配对和事件驱动策略，具备丰富的市场趋势判断与风控能力，曾管理上百个山寨币项目的流动性和市值。{" "}
                          </div>
                        </div>
                      );
                    }}
                  </Transition>
                );
              }}
            </InView>
            <InView triggerOnce={true} threshold={0}>
              {({ inView, ref, entry }) => {
                return (
                  <Transition in={inView} timeout={300}>
                    {(state) => {
                      return (
                        <div
                          ref={ref}
                          style={{
                            ...scaleDefaultStyle,
                            ...scaleTransitionStyles[state],
                          }}
                          className="transition relative md:px-[24px] px-[32px] md:pt-[61px] pt-[80px] md:pb-[50px] pb-[40px] bg-[#242333] rounded-[20px] border-[1px] border-solid border-[rgba(255,255,255,0.16)]"
                        >
                          <div className="absolute md:top-[-64px] top-[-48px] md:left-[36px] left-[48px] md:w-[100px] md:h-[100px] w-[96px] h-[96px] rounded-full">
                            <Image
                              width={100}
                              height={100}
                              src="/images/team-people3.png"
                              className="w-full h-full"
                              alt=""
                            />
                          </div>
                          <div className="flex items-center md:mb-[12px] mb-[24px] md:justify-start justify-between">
                            <div className="md:text-[20px] text-[40px] md:leading-[28px] leading-[40px] mr-[16px]">
                              胡卓伊 Suki Hu
                            </div>
                            <a
                              href="https://x.com/kkbst88"
                              target="_blank"
                              className="md:w-[32px] md:h-[32px] w-[48px] h-[48px] flex items-center justify-center bg-white bg-opacity-[0.11] rounded-full"
                            >
                              <Image
                                width={32}
                                height={32}
                                className="md:w-[16px] md:h-[16px] w-[24px] h-[24px]"
                                src="/images/icon-x.png"
                                alt=""
                              />
                            </a>
                          </div>
                          <div className="md:text-[16px] text-[24px] md:leading-[26px] leading-[40px] md:pb-[12px] pb-[24px] md:mb-[12px] mb-[24px] border-b-[1px] border-solid border-[rgba(255,255,255,0.12)]">
                            1kB Capital 合伙人&投资分析师
                            <br />
                            前波卡中国区开发者社区负责人 <br />
                            曾任知名互联网公司产品经理
                            <br />
                            多伦多大学数学与统计学双荣誉学位
                          </div>
                          <div className="md:text-[14px] text-[22px] md:leading-[26px] leading-[38px] text-content">
                            自2021年进入加密货币领域，积累了丰富的二级市场交易和项目实践经验。专注于区块链赛道的深入研究，精通项目基本面分析与风险识别，具备独到的区块链技术与市场趋势洞察力。{" "}
                          </div>
                        </div>
                      );
                    }}
                  </Transition>
                );
              }}
            </InView>
          </div>
        </div>
      </div>
      {/* 联系 */}
      <div id="contact" className="md:py-[100px] py-[80px] bg-[#111116]">
        <div className="md:max-w-[520px] md:mx-auto mx-[40px]">
          <div className="mb-[42px]">
            <div className="md:mb-[16px] mb-[8px] md:text-[40px] text-[32px] leading-[40px] text-center font-[600]">
              联系我们
            </div>
            <div className="mx-auto md:w-[80px] w-[56px] md:h-[6px] h-[4px] bg-gradient-to-r from-[#1EFB9C] via-[#5DD1FF] to-[#D36DFF]"></div>
          </div>
          <div className="md:mb-[42px] mb-[48px] md:text-[20px] text-[24px] md:leading-[33px] leading-[24px] text-center text-content">
            如有任何疑问，欢迎随时联系我们，我们将会尽快回复您。
          </div>
          <div className="flex flex-col md:flex-row md:mb-[24px] mb-[60px] md:items-start items-center">
            <Image
              width={24}
              height={24}
              className="md:mb-0 mb-[24px] md:w-[24px] w-[48px] md:h-[24px] h-[48px]"
              src="/images/icon-email.png"
              alt=""
            />
            <span className="ml-[12px] md:text-[20px] text-[32px] md:leading-[24px] leading-[32px]">
              contact@1kb.capital
            </span>
          </div>
          <div className="flex flex-col md:flex-row mb-[24px] md:items-start items-center">
            <Image
              width={24}
              height={24}
              className="md:mb-0 mb-[24px] md:w-[24px] w-[48px] md:h-[24px] h-[48px]"
              src="/images/icon-address.png"
              alt=""
            />
            <span className="ml-[12px] md:text-[20px] text-[28px] md:leading-[30px] leading-[40px]">
              90 Connaught Road Central, Hong Kong
            </span>
          </div>
        </div>
      </div>
      {/* footer */}
      <div className="md:py-[56px] py-[80px]">
        <div className="max-w-[950px] md:mx-auto md:px-[15px] mx-[40px]">
          <div className="flex md:flex-row flex-col md:justify-between justify-center">
            <div className="md:block flex flex-col items-center md:pb-0 pb-[48px] md:border-none border-b-[2px] border-solid border-[rgba(255,255,255,0.12)]">
              <div className="md:mb-[12px] mb-[24px]">
                <Image
                  width={111}
                  height={51}
                  src="/images/logo-pc.png"
                  className="md:w-[111px] md:h-[51px] w-[222px] h-[102px]"
                  alt=""
                />
              </div>
              <div className="md:text-[14px] text-[28px] md:leading-[22px] leading-[44px]">
                Unlocking crypto value through
                <br /> precise, adaptive strategies.
              </div>
            </div>
            <div className="flex md:flex-row flex-col">
              <InView triggerOnce={true}>
                {({ inView, ref }) => {
                  return (
                    <div
                      ref={ref}
                      className="md:pt-0 pt-[48px] flex flex-col items-center justify-center md:pb-0 pb-[48px] md:border-none border-b-[2px] border-solid border-[rgba(255,255,255,0.12)]"
                    >
                      <div className="md:text-[20px] text-[32px] md:leading-[22px] leading-[44px] md:mb-[32px] mb-[56px] text-title">
                        GO TO
                      </div>
                      {menus.map((d, i) => {
                        return (
                          <Transition key={d.value} in={inView} timeout={300}>
                            {(state) => {
                              return (
                                <a
                                  style={{
                                    ...scaleDefaultStyle,
                                    ...scaleTransitionStyles[state],
                                    transitionDelay: `${(i + 1) * 100}ms`,
                                  }}
                                  href={`#${d.id}`}
                                  className="transition md:text-[16px] text-[36px] md:leading-[22px] leading-[36px] md:mb-[12px] mb-[48px]"
                                >
                                  {d.label}
                                </a>
                              );
                            }}
                          </Transition>
                        );
                      })}
                    </div>
                  );
                }}
              </InView>

              <div className="md:ml-[105px] md:pt-0 pt-[48px] flex flex-col items-center">
                <div className="md:text-[20px] text-[32px] md:leading-[22px] leading-[44px] md:mb-[32px] mb-[64px] text-title">
                  Contact
                </div>
                <InView triggerOnce={true}>
                  {({ inView, ref }) => {
                    return (
                      <div ref={ref} className="flex">
                        <Transition in={inView} timeout={300}>
                          {(state) => {
                            return (
                              <a
                                href="https://x.com/1kBCapital"
                                target="_blank"
                                style={{
                                  ...scaleDefaultStyle,
                                  ...scaleTransitionStyles[state],
                                }}
                                className="transition"
                              >
                                <Image
                                  width={16}
                                  height={16}
                                  className="md:w-[16px] md:h-[16px] w-[64px] -[64px]"
                                  src="/images/icon-x.png"
                                  alt=""
                                />
                              </a>
                            );
                          }}
                        </Transition>
                      </div>
                    );
                  }}
                </InView>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
