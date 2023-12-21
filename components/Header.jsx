"use client";
import React, { useState, useEffect } from "react";

//components
import Logo from "./Logo";
import ThemeToggler from "./ThemeToggler";
import Nav from "./Nav";
import MobileNav from "./MobileNav";
import { usePathname } from "next/navigation";

const Header = () => {
  const [header, setHeader] = useState(false);
  const pathname = usePathname();
  console.log(pathname);

  useEffect(() => {
    const scrollYPos = window.addEventListener("scroll", () => {
      window.scrollY > 50 ? setHeader(true) : setHeader(false);
    });

    return () => window.removeEventListener("scroll", scrollYPos);
  });

  return (
    <header
      className={` ${
        header
          ? "py-4 bg-white shadow-lg dark:bg-accent"
          : "py-6 dark:bg-transparent"
      } sticky top-0 z-30 transition-all ${pathname==='/'&&'bg-#fef9f5'}`} >
      {/* pathname 조건부 클래스 설명:

        ${pathname==='/'&&'bg-#fef9f5'} 부분은,
        pathname 변수의 값이 '/'일 경우에만 bg-#fef9f5 클래스를 적용한다는 것.

        JavaScript의 논리 연산자 &&는 왼쪽 표현식이 true일 때만 오른쪽 표현식을 평가함.
        고로, 여기서는 pathname이 '/'인 경우에만 bg-#fef9f5가 적용됨. */}
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          <Logo />

          <div className="flex items-center gap-x-6">
            {/* nav */}
            <Nav
              containerStyles="hidden xl:flex gap-x-8 items-center"
              linkStyles="relative hover:text-primary transition-all"
              underlineStyles="absolute left-0 top-full h-[2px] bg-primary w-full"
            />
            <ThemeToggler />

            {/* nav for mobile */}
            <div className="xl:hidden">
              <MobileNav />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
