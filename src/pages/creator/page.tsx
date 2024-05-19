'use client'
import 'survey-core/defaultV2.min.css'
import 'survey-creator-core/survey-creator-core.min.css'
import {
  ISurveyCreatorOptions,
  SurveyCreator,
  SurveyCreatorComponent,
} from 'survey-creator-react'

const creatorOptions = {
  showLogicTab: true,
  showThemeTab: true,
  isAutoSave: true,
  showJSONEditorTab: false,
}

export default function Creator() {
  const creator = new SurveyCreator(creatorOptions)
  creator.saveSurveyFunc = (saveNo, callback) => {
    console.log(creator.JSON)
    callback(saveNo, true)
  }
  return (
    <div style={{ height: '100vh' }}>
      <SurveyCreatorComponent creator={creator}></SurveyCreatorComponent>
    </div>
  )
}
