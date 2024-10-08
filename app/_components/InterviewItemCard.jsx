import React from 'react'
import { dateConverter } from '../_utilis/helper'
import { Button } from '@/components/ui/button'
import { useRouter } from 'next/navigation'

const InterviewItemCard = ({interviewInfo}) => {
   const router= useRouter()
  return (
    <div className='border shadow-sm rounded-lg p-3'>
        <h2 className='font-bold text-blue-800'>{interviewInfo?.jobPosition}</h2>
        <h2 className='text-sm text-gray-600'>{interviewInfo?.jobExperience==="fresher"?"Fresher":interviewInfo?.jobExperience + "Years of Experience"} </h2>
        <h2 className='text-gray-400'>Created At:{dateConverter(interviewInfo?.createdAt)}</h2>
        <div className='flex justify-between mt-2'>
            <Button size='sm' variant='outline' onClick={() => router.push(`/dashboard/interview/${interviewInfo?.mockId}/feedback`)}>Feedback</Button>
            <Button size='sm'className="bg-blue-600 text-white"
            onClick={() => router.push(`/dashboard/interview/${interviewInfo?.mockId}`)}
            >Retake</Button>
        </div>
    </div>
  )
}

export default InterviewItemCard