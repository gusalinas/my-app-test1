"use client";

import {useTheme} from "next-themes";
import { useEffect, useState } from "react";
import { Button } from "@nextui-org/button";
import { BsSunFill, BsMoonFill } from "react-icons/bs";

export default function ThemeSwitcher() {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  if(!mounted) return null

  function onHandleClick(isDark:boolean) {
    if(theme==='dark'){
        setTheme('light')
    }else{
        setTheme('dark')
    }  
  }

  return (
    <div>
      <Button isIconOnly onClick={ () => onHandleClick(theme === 'dark' ? true : false)} >
        { theme === 'dark' ? <BsMoonFill/> :  <BsSunFill/> } 
      </Button>
    </div>
  )
};