import React from 'react'

import Link from 'next/link'
import { FaLine } from 'react-icons/fa6'

const LineFix = () => {
  return (
    <div className=" fixed bottom-4 right-5 sm:bottom-0 md:bottom-4  z-[9999999]">
      <Link
        href="https://lin.ee/8e7KCcu"
        target="__blank"
      >
        <div className="flex items-center gap-2 rounded-2xl bg-[#06C755] hover:bg-green-600 p-4 text-white">
          <FaLine />
          <p>ปรึกษาแอดมิน</p>
        </div>
      </Link>
    </div>
  )
}

export default LineFix
