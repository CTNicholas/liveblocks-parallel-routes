"use client";

import Link from 'next/link'
import { motion } from 'framer-motion'
import { usePathname } from 'next/navigation'
import { Whiteboard } from '@/components/Whiteboard'


export default function WhiteboardPage ({ params: { id } }: { params: { id: string } }) {
  const pathname = usePathname();
  const onDashboard = pathname.endsWith("dashboard")
  console.log(pathname)
  return (
    <>
      <motion.div animate={{ scale: onDashboard ? 0.2 : 1 }} className="border-2 border-red-500">
        <div><Link href="/dashboard">Dashboard link</Link></div>
        <Whiteboard />
      </motion.div>
    </>
  )
}
