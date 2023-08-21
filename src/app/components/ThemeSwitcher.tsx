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


  return (
    <div>
      <Button onClick={() => setTheme('light')}><BsSunFill/></Button>
      <Button onClick={() => setTheme('dark')}><BsMoonFill/></Button>
    </div>
  )
};