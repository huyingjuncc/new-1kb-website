"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
import {
  CSSTransition,
  Transition,
  TransitionGroup,
} from "react-transition-group";

export default function Header() {
  const [hashValue, setHashValue] = useState("");
  const [toggle, setToggle] = useState(false);
  const [transitionFlg, setTransitionFlg] = useState(false);
  useEffect(() => {
    const handleHashChange = () => {
      // setHashValue(window.location.hash);
      console.log("window.location.hash", window.location.hash);
    };
    window.addEventListener("hashchange", handleHashChange);
    return () => {
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, []);
  const duration = 200;
  const defaultStyle = {
    transition: `all ${duration}ms linear`,
    opacity: 0,
    transform: "translateX(-40px)",
  };
  const transitionStyles: any = {
    entering: { opacity: 1, transform: "translateX(0)" },
    entered: { opacity: 1, transform: "translateX(0)" },
    exiting: { opacity: 0, transform: "translateX(-40px)" },
    exited: { opacity: 0, transform: "translateX(-40px)" },
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
  const handleClick = () => {
    setToggle(!toggle);
    setTimeout(() => {
      setTransitionFlg(toggle);
    });
  };
  const [menu, setMenu] = useState(null);
  const handleMenuClick = (data: any) => {
    setMenu(data.value);
    setToggle(false);
  };
  const handlePcMenuClick = (data: any) => {
    setMenu(data.value);
  };
  return (
    <>
      <div>{hashValue}</div>
      <div className="md:h-[80px]  h-[96px] sticky top-0 left-0 z-50 text-blue transition-shadow duration-200 box-content border-b-[1px] border-transparent bg-blue">
        <div className="flex h-full w-full px-4">
          <div className="w-full mx-auto max-w-[1134px]">
            <div className="flex justify-between items-center h-full">
              <a href="#home">
                <button>
                  <Image
                    className="w-[140px] h-[64px] md:w-[111px] md:h-[51px]"
                    width={222}
                    height={102}
                    src={"/images/logo-pc.png"}
                    alt="logo"
                  ></Image>
                </button>
              </a>
              <div className="hidden md:flex items-center">
                <div className="flex" style={{ opacity: 1 }}>
                  {menus.map((d) => {
                    return (
                      <a
                        href={`#${d.id}`}
                        key={d.value}
                        tabIndex={0}
                        className="relative px-[30px]"
                        onClick={() => handlePcMenuClick(d)}
                      >
                        <span
                          className={`text-title text-[16px] leading-[22px] ${
                            menu === d.value ? "text-[#D36DFF]" : "text-[#fff]"
                          }`}
                        >
                          {d.label}
                        </span>
                        <div
                          className={`${
                            menu === d.value ? "block" : "hidden"
                          } absolute left-0 right-0 bottom-[-8px] w-[4px] h-[4px] m-auto rounded-full bg-[#D36DFF]`}
                        ></div>
                      </a>
                    );
                  })}
                </div>
              </div>
              <button
                aria-label="Toggle dropdown"
                className="flex md:hidden cursor-pointer w-[48px] h-[48px] relative"
                onClick={handleClick}
              >
                <Image
                  width={48}
                  height={48}
                  src={
                    toggle ? "/images/icon-close.png" : "/images/icon-menu.png"
                  }
                  alt="menu"
                ></Image>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div
        className={`fixed left-0 z-40 h-[calc(100%-48px)] w-full bg-[rgba(0,0,0,0.59)] backdrop-blur-[14px] transition-[top] duration-300 ease-in-out text-white ${
          toggle ? "top-[96px]" : "-top-full"
        }`}
      >
        {toggle ? (
          <div className="flex flex-col h-full p-[40px] pt-[80px]">
            {menus.map((d, i) => {
              return (
                <Transition
                  in={toggle}
                  timeout={duration}
                  key={d.value}
                  appear={true}
                  mountOnEnter={true}
                >
                  {(state) => (
                    <a
                      href={`#${d.id}`}
                      className={`mb-[64px] text-[40px] leading-[40px] text-title ${
                        menu === d.value ? "text-[#D36DFF]" : "text-[#fff]"
                      }`}
                      style={{
                        ...defaultStyle,
                        ...transitionStyles[state],
                        transitionDelay: `${(i + 1) * 100}ms`,
                      }}
                      onClick={() => handleMenuClick(d)}
                    >
                      {d.label}
                    </a>
                  )}
                </Transition>
              );
            })}
          </div>
        ) : (
          <></>
        )}
      </div>
    </>
  );
}
