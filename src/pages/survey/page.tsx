'use client'
import React, { useCallback } from 'react'
import 'survey-core/defaultV2.min.css'
import { Model } from 'survey-core'
import { Survey } from 'survey-react-ui'

const surveyJson = {
  elements: [
    {
      name: 'FirstName',
      title: 'Enter your first name:',
      type: 'text',
    },
    {
      name: 'LastName',
      title: 'Enter your last name:',
      type: 'text',
    },
  ],
}
function Page() {
  const survey = new Model(surveyJson)

  const surveyComplete = useCallback((res: any) => {
    console.log(res.data)
  }, [])

  survey.onComplete.add(surveyComplete)
  return (
    <div>
      <Survey model={survey}></Survey>
    </div>
  )
}

export default Page
