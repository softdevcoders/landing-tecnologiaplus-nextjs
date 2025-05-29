// Server Component
import ContactFormClient from "./contact-form-client";
import { sendEmail } from "@/app/actions/contact";
import Image from "next/image";
import style from "./contact-form.module.scss";

async function ContactForm({ noMarginTop = false }) {
  return (
    <section className={style.contact__form}>
      <Image
        src="https://res.cloudinary.com/ddqh0mkx9/image/upload/c_scale/w_300/v1738349923/nisgh2gbe0ginddnsrko_opkrn1.webp"
        alt="Contact Form Background"
        width={1920}
        height={1080}
        className={style.contact__form__background}
      />
      <div className={style.contact__form__container}>
        <div
          className={`${style.form__container} ${
            noMarginTop ? style.noMarginTop : ""
          }`}
        >
          <ContactFormClient sendEmail={sendEmail} />
        </div>
        <div className={style.contact__texts}>
          <h2 className={style.contact__title}>Te brindamos asesoría</h2>
          <p>Para escoger la mejor opción según tu necesidad</p>
        </div>
      </div>
    </section>
  );
}

export default ContactForm;
