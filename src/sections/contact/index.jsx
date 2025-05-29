
import ContactForm from '@/components/contact-form/contact-form'
import style from './contact.module.scss'

const ContactSection = () => {
  return (
    <section className={style.contact}>
      <div className={style.contact_container}>
        <ContactForm noMarginTop />
      </div>
    </section>
  )
}

export default ContactSection
