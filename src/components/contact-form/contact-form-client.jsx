'use client'

import { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import style from './contact-form.module.scss';
import { FaCheck } from 'react-icons/fa';
import { usePathname } from 'next/navigation';

const ContactFormClient = ({ sendEmail }) => {
  const pathname = usePathname();
  const { register, handleSubmit, reset, formState: { errors, isSubmitting } } = useForm({
    defaultValues: {
      name: '',
      email: '',
      phone: '',
      message: ''
    }
  });
  const [isSuccess, setIsSuccess] = useState(false);
  const [submitError, setSubmitError] = useState('');

  const onSubmit = async (data) => {
    try {
      await sendEmail(data);
      setIsSuccess(true);
      reset();
    } catch (error) {
      setSubmitError('Hubo un error al enviar el mensaje. Por favor intenta nuevamente.');
    }
  };

  useEffect(() => {
    if (isSuccess) {
      setIsSuccess(false);
      reset();
    }
  }, [pathname]);

  if (isSuccess) {
    return (
      <div className={style.message__container}>
        <div className={style.message__head}>
          <FaCheck className={style.check__icon} />
          <h2>¡Mensaje enviado!</h2>
        </div>
        <p>
          Gracias. Nos pondremos en contacto contigo lo antes posible.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h2>Llámanos o escríbenos</h2>
      
      {submitError && (
        <div className={style.form_error}>{submitError}</div>
      )}
      
      <div className={`${style.input_group}`}>
        <input
          type="text"
          placeholder="* Nombre"
          className={errors.name ? style.error_input : ''}
          {...register("name", { 
            required: "Por favor ingresa tu nombre"
          })}
        />
        <span className={style.floating_label}>Nombre</span>
        {errors.name && (
          <span className={style.form_error}>{errors.name.message}</span>
        )}
      </div>

      <div className={`${style.input_group}`}>
        <input
          type="email"
          placeholder="* Correo electrónico"
          className={errors.email ? style.error_input : ''}
          {...register("email", {
            required: "Por favor ingresa tu correo electrónico",
            pattern: {
              value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
              message: "Por favor ingresa un correo electrónico válido"
            }
          })}
        />
        <span className={style.floating_label}>Correo electrónico</span>
        {errors.email && (
          <span className={style.form_error}>{errors.email.message}</span>
        )}
      </div>

      <div className={`${style.input_group}`}>
        <input
          type="tel"
          placeholder="* Celular"
          className={errors.phone ? style.error_input : ''}
          {...register("phone", {
            required: "Por favor ingresa tu número de teléfono",
            pattern: {
              value: /^\+?[\d\s-]{7,}$/,
              message: "Por favor ingresa un número de teléfono válido"
            }
          })}
        />
        <span className={style.floating_label}>Teléfono</span>
        {errors.phone && (
          <span className={style.form_error}>{errors.phone.message}</span>
        )}
      </div>

      <div className={`${style.input_group}`}>
        <textarea
          placeholder="* En qué te podemos ayudar"
          className={`${style.textarea} ${errors.message ? style.error_input : ''}`}
          {...register("message", {
            required: "Por favor ingresa tu mensaje",
            minLength: {
              value: 3,
              message: "Escribe un mensaje"
            }
          })}
        />
        <span className={style.floating_label}>Mensaje</span>
        {errors.message && (
          <span className={style.form_error}>{errors.message.message}</span>
        )}
      </div>

      <button
        type="submit"
        className={style.submit_button}
        disabled={isSubmitting}
      >
        {isSubmitting ? 'Enviando...' : 'Enviar'}
      </button>
    </form>
  );
}

export default ContactFormClient;