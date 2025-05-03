"use client";
import { useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import style from "./ContactForm.module.scss";
import { GoCheckCircleFill } from "react-icons/go";
import emailjs from "@emailjs/browser";

// EmailJS configuration - use environment variables if available, fallback to hardcoded values
// You can manage your EmailJS account at https://www.emailjs.com/
const EMAILJS_PUBLIC_KEY =
  typeof window !== "undefined" && process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
    ? process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
    : process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || "2GchzUk8R_GkDrG-D";
const EMAILJS_TEMPLATE_ID =
  typeof window !== "undefined" && process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID
    ? process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID
    : process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || "template_acf4fs9";
const EMAILJS_SERVICE_ID =
  typeof window !== "undefined" && process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID
    ? process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID
    : process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || "service_o3q91up";

// Local storage key to track form submissions
const FORM_SUBMISSION_KEY = "contact_form_submission";
// Cooldown period in milliseconds (1 hour)
const SUBMISSION_COOLDOWN = 60 * 60 * 1000;

// Form validation schema using Zod
const formSchema = z.object({
  user_name: z
    .string()
    .min(2, "El nombre debe tener al menos 2 caracteres")
    .max(50, "El nombre no puede superar los 50 caracteres")
    .regex(/^[a-zA-ZáéíóúÁÉÍÓÚüÜñÑ\s]+$/, "Solo se permiten letras y espacios"),
  user_phone: z
    .string()
    .min(10, "El número debe tener al menos 10 dígitos")
    .max(10, "El número debe tener exactamente 10 dígitos")
    .regex(/^[0-9\s]+$/, "Solo se permiten números y espacios")
    .regex(
      /^3\d{9}$/,
      "Debe ser un número de celular colombiano válido (ej: 3123456789)"
    ),
  user_email: z
    .string()
    .email("Por favor, ingresa un correo electrónico válido"),
  message: z
    .string()
    .min(10, "El mensaje debe tener al menos 10 caracteres")
    .max(500, "El mensaje no puede superar los 500 caracteres"),
});

function ContactForm({ noMarginTop = false }) {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [cooldownActive, setCooldownActive] = useState(false);
  const [cooldownRemaining, setCooldownRemaining] = useState(0);
  const [attemptedSubmit, setAttemptedSubmit] = useState(false);
  const formRef = useRef();
  const messageRef = useRef();

  // React Hook Form setup with Zod validation
  const {
    register,
    handleSubmit: validateSubmit,
    formState: { errors, isValid, touchedFields },
    reset,
    trigger,
    watch,
    setValue,
    clearErrors,
  } = useForm({
    resolver: zodResolver(formSchema),
    mode: "onChange", // Validate on change for better user experience
    delayError: 500, // Delay error messages for better UX
  });

  const watchedFields = watch();

  // Clear errors when fields are empty
  useEffect(() => {
    if (!attemptedSubmit) {
      const fields = ["user_name", "user_phone", "user_email", "message"];

      fields.forEach((field) => {
        if (watchedFields[field] === "") {
          clearErrors(field);
        }
      });
    }
  }, [clearErrors, attemptedSubmit]);

  // Auto-resize textarea
  useEffect(() => {
    if (messageRef.current) {
      messageRef.current.style.height = "auto";
      messageRef.current.style.height = `${messageRef.current.scrollHeight}px`;
    }
  }, [watchedFields.message]);

  // Phone number input handler to remove non-numeric characters
  const handlePhoneInput = (e) => {
    if (!e || !e.target) return;
    
    const input = e.target;
    const value = input.value.replace(/[^0-9]/g, "");

    // Limit to 10 digits
    if (value.length > 10) {
      input.value = value.slice(0, 10);
    } else {
      input.value = value;
    }

    // Update React Hook Form
    setValue("user_phone", input.value, { shouldValidate: true });
  };

  // Check for previous submissions on component mount
  useEffect(() => {
    const checkPreviousSubmission = () => {
      try {
        const lastSubmission = localStorage.getItem(FORM_SUBMISSION_KEY);
        if (lastSubmission) {
          const submissionTime = parseInt(lastSubmission, 10);
          const currentTime = Date.now();
          const timeElapsed = currentTime - submissionTime;

          if (timeElapsed < SUBMISSION_COOLDOWN) {
            setCooldownActive(true);
            setCooldownRemaining(SUBMISSION_COOLDOWN - timeElapsed);

            // Set a timer to remove the cooldown when it expires
            const timerId = setTimeout(() => {
              setCooldownActive(false);
              localStorage.removeItem(FORM_SUBMISSION_KEY);
            }, SUBMISSION_COOLDOWN - timeElapsed);

            return () => clearTimeout(timerId);
          } else {
            // Clear expired submission
            localStorage.removeItem(FORM_SUBMISSION_KEY);
          }
        }
      } catch (error) {
        console.error("Error checking local storage:", error);
      }
    };

    checkPreviousSubmission();
  }, []);

  // Update cooldown timer every second
  useEffect(() => {
    let interval;
    if (cooldownActive && cooldownRemaining > 0) {
      interval = setInterval(() => {
        setCooldownRemaining((prev) => (prev > 1000 ? prev - 1000 : 0));
        if (cooldownRemaining <= 1000) {
          setCooldownActive(false);
          localStorage.removeItem(FORM_SUBMISSION_KEY);
        }
      }, 1000);
    }

    return () => clearInterval(interval);
  }, [cooldownActive, cooldownRemaining]);

  const handleFormSubmit = async (data) => {
    if (cooldownActive) return;

    setAttemptedSubmit(true);
    setLoading(true);
    setError(null);

    try {
      // Create template parameters with phone concatenated to message
      const templateParams = {
        user_name: data.user_name,
        user_email: data.user_email,
        message: `${data.message}\n\nNúmero de contacto: ${data.user_phone} \n\n Correo de contacto: ${data.user_email}`,
      };

      // Send email using EmailJS
      const result = await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        templateParams,
        EMAILJS_PUBLIC_KEY
      );

      if (result.status === 200) {
        setSubmitted(true);
        reset();
        setAttemptedSubmit(false);
        // Save submission timestamp to localStorage
        try {
          localStorage.setItem(FORM_SUBMISSION_KEY, Date.now().toString());
        } catch (error) {
          console.error("Error saving to local storage:", error);
        }
      } else {
        throw new Error("Failed to send email");
      }
    } catch (error) {
      setError("Hubo un problema al enviar tu mensaje. Inténtalo de nuevo.");
      console.error("Email error:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleSubmitClick = () => {
    setAttemptedSubmit(true);
    trigger(); // Trigger all validations before submitting
  };

  // Format remaining cooldown time into minutes and seconds
  const formatCooldownTime = (milliseconds) => {
    const minutes = Math.floor(milliseconds / 60000);
    const seconds = Math.floor((milliseconds % 60000) / 1000);
    return `${minutes}m ${seconds}s`;
  };

  return (
    <section className={style.contact__form}>
      <div className={style.contact__form__container}>
        <div
          className={`${style.form__container} ${
            noMarginTop ? style.noMarginTop : ""
          }`}
        >
          {submitted ? (
            <div className={style.message__container}>
              <div className={style.message__head}>
                <GoCheckCircleFill className={style.check__icon} />
                <h2>Mensaje recibido</h2>
              </div>
              <p>En la próxima hora hábil estaremos en contacto contigo.</p>
            </div>
          ) : (
            <form
              ref={formRef}
              onSubmit={validateSubmit(handleFormSubmit)}
              noValidate
            >
              <h2>Llámanos o escríbenos</h2>

              <div
                className={`${style.input_group} ${
                  watchedFields.user_name ? style.has_value : ""
                }`}
              >
                <label htmlFor="user_name" className={style.floating_label}>
                  Nombre
                </label>
                <input
                  id="user_name"
                  type="text"
                  placeholder="Nombre"
                  className={
                    errors.user_name &&
                    (touchedFields.user_name || attemptedSubmit)
                      ? style.error_input
                      : ""
                  }
                  {...register("user_name")}
                  data-tooltip={
                    errors.user_name &&
                    (touchedFields.user_name || attemptedSubmit)
                      ? errors.user_name.message
                      : ""
                  }
                />
              </div>

              <div
                className={`${style.input_group} ${
                  watchedFields.user_phone ? style.has_value : ""
                }`}
              >
                <label htmlFor="user_phone" className={style.floating_label}>
                  Celular
                </label>
                <input
                  id="user_phone"
                  type="tel"
                  inputMode="numeric"
                  placeholder="Celular (3123456789)"
                  maxLength={10}
                  className={
                    errors.user_phone &&
                    (touchedFields.user_phone || attemptedSubmit)
                      ? style.error_input
                      : ""
                  }
                  {...register("user_phone")}
                  onInput={handlePhoneInput}
                  data-tooltip={
                    errors.user_phone &&
                    (touchedFields.user_phone || attemptedSubmit)
                      ? errors.user_phone.message
                      : ""
                  }
                />
              </div>

              <div
                className={`${style.input_group} ${
                  watchedFields.user_email ? style.has_value : ""
                }`}
              >
                <label htmlFor="user_email" className={style.floating_label}>
                  Correo
                </label>
                <input
                  id="user_email"
                  type="email"
                  placeholder="Correo"
                  className={
                    errors.user_email &&
                    (touchedFields.user_email || attemptedSubmit)
                      ? style.error_input
                      : ""
                  }
                  {...register("user_email")}
                  data-tooltip={
                    errors.user_email &&
                    (touchedFields.user_email || attemptedSubmit)
                      ? errors.user_email.message
                      : ""
                  }
                />
              </div>

              <div
                className={`${style.input_group} ${
                  watchedFields.message ? style.has_value : ""
                }`}
              >
                <label htmlFor="message" className={style.floating_label}>
                  Mensaje
                </label>
                <textarea
                  id="message"
                  ref={messageRef}
                  placeholder="En qué te podemos ayudar (mínimo 10 caracteres)"
                  className={`${style.textarea} ${
                    errors.message && (touchedFields.message || attemptedSubmit)
                      ? style.error_input
                      : ""
                  }`}
                  {...register("message")}
                  data-tooltip={
                    errors.message && (touchedFields.message || attemptedSubmit)
                      ? errors.message.message
                      : ""
                  }
                  rows={3}
                ></textarea>
              </div>

              {error && <div className={style.form_error}>{error}</div>}

              {cooldownActive && true ? (
                <p className={style.cooldown_message}>
                  Ya has enviado un mensaje. Puedes enviar otro en{" "}
                  {formatCooldownTime(cooldownRemaining)}.
                </p>
              ) : (
                <button
                  type="submit"
                  disabled={loading}
                  onClick={handleSubmitClick}
                  className={style.submit_button}
                >
                  {loading ? "Enviando..." : "Enviar"}
                </button>
              )}
            </form>
          )}
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
