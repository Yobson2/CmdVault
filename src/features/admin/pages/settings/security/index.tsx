import ContentSection from '../components/content-section'
import SecurityForm from './security-form'

export default function SettingsSecurity() {
  return (
    <ContentSection
      title='Security'
      desc='Change your account password.'
    >
      <SecurityForm />
    </ContentSection>
  )
}
