'use client'

import { Button, Timeline } from 'flowbite-react'
import { HiArrowNarrowRight, HiCalendar } from 'react-icons/hi'

export default function Experience() {
  const listExperient = [
    {
      title: 'ครูสอนวิชาภาษาฝรั่งเศส โรงเรียนเตรียมอุดมศึกษา (4 ปี)',
    },
    {
      title: 'กรรมการผู้สอบ DELF A1-A2 Scolaire',
    },
    {
      title:
        'ผู้ร่วมเขียนหนังสือ "SURVIVOR Plus : ฝรั่งเศส" พูดฝรั่งเศสได้ ไปไหนก็รอด สำนักพิมพ์ อมรินทร์',
    },
    {
      title:
        'วิทยากรอบรมหัวข้อ "การสอนภาษาฝรั่งเศสในฐานะภาษาต่างประเทศ" คณะอักษรศาสตร์ มหาวิทยาลัยศิลปากร',
    },
    {
      title:
        'วิทยากรอบรมหัวข้อ "ภาษาฝรั่งเศสกับการทำงานในปัจจุบัน" คณะมนุษยศาสตร์และสังคมศาสตร์ มหาวิทยาลัยบูรพา',
    },
    {
      title:
        'หัวหน้าโครงการ ทัศนศึกษาและเรียนภาษาฝรั่งเศสสำหรับนักเรียนโรงเรียนเตรียมอุดมศึกษาสถาบัน IFALPES เมืองอานซี ประเทศฝรั่งเศส',
    },
  ]
  return (
    <div className="w-[60%] mx-auto mt-20">
      <p className="flex justify-center items-center bg-primary text-white text-2xl py-2 mb-8 rounded-full">
        ประสบการณ์การทำงาน
      </p>
      <Timeline>
        {listExperient.map((item, index) => (
          <Timeline.Item key={`experient-${index}`}>
            <Timeline.Point icon={HiCalendar} />
            <Timeline.Content>
              <Timeline.Title>{item.title}</Timeline.Title>
            </Timeline.Content>
          </Timeline.Item>
        ))}
      </Timeline>
    </div>
  )
}
