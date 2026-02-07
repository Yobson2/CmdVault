import ContentSection from '../components/content-section'
import CommandDefaultsForm from './command-defaults-form'

export default function SettingsCommandDefaults() {
  return (
    <ContentSection
      title='Command Defaults'
      desc='Set default values for new commands. These will pre-fill the form when creating a command.'
    >
      <CommandDefaultsForm />
    </ContentSection>
  )
}
