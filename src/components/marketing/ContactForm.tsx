"use client";

import { useState, type FormEvent, type ChangeEvent } from "react";
import { insertLead, type LeadInput } from "@/lib/supabase/leads";

type FormStatus = "idle" | "submitting" | "success" | "error";

interface FormData {
  nombre: string;
  email: string;
  empresa: string;
  telefono: string;
  sector: string;
  mensaje: string;
}

interface FieldErrors {
  nombre?: string;
  email?: string;
  mensaje?: string;
}

const SECTORES: readonly string[] = [
  "Clínicas y médicos",
  "Inmobiliarias",
  "Servicios y reformas",
  "Despachos y gestorías",
  "Restaurantes",
  "Talleres y automoción",
];

const EMPTY_FORM: FormData = {
  nombre: "",
  email: "",
  empresa: "",
  telefono: "",
  sector: "",
  mensaje: "",
};

function validate(data: FormData): FieldErrors {
  const errors: FieldErrors = {};
  if (!data.nombre.trim()) {
    errors.nombre = "El nombre es obligatorio.";
  }
  if (!data.email.trim()) {
    errors.email = "El correo electrónico es obligatorio.";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email.trim())) {
    errors.email = "Introduce un correo electrónico válido.";
  }
  if (!data.mensaje.trim()) {
    errors.mensaje = "El mensaje es obligatorio.";
  }
  return errors;
}

interface InputFieldProps {
  id: string;
  name: string;
  label: string;
  type?: string;
  placeholder?: string;
  value: string;
  error?: string;
  required?: boolean;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

function InputField({
  id,
  name,
  label,
  type = "text",
  placeholder,
  value,
  error,
  required = false,
  onChange,
}: InputFieldProps) {
  return (
    <div>
      <label
        htmlFor={id}
        className="mb-1.5 block text-[13px] font-medium text-muted"
      >
        {label}
        {required && <span className="ml-1 text-cyan">*</span>}
      </label>
      <input
        id={id}
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        autoComplete="off"
        className={`w-full rounded-xl border bg-bg px-4 py-3 text-[15px] text-white placeholder:text-muted/50 focus:outline-none transition-colors ${
          error ? "border-red-400/60 focus:border-red-400" : "border-border focus:border-cyan"
        }`}
      />
      {error && (
        <p className="mt-1.5 text-[12px] text-red-400">{error}</p>
      )}
    </div>
  );
}

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>(EMPTY_FORM);
  const [errors, setErrors] = useState<FieldErrors>({});
  const [status, setStatus] = useState<FormStatus>("idle");
  const [serverError, setServerError] = useState<string>("");

  function handleChange(
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ): void {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => {
      if (name === "nombre") return { ...prev, nombre: undefined };
      if (name === "email") return { ...prev, email: undefined };
      if (name === "mensaje") return { ...prev, mensaje: undefined };
      return prev;
    });
  }

  async function handleSubmit(e: FormEvent<HTMLFormElement>): Promise<void> {
    e.preventDefault();
    const validation = validate(formData);
    if (Object.keys(validation).length > 0) {
      setErrors(validation);
      return;
    }
    setStatus("submitting");
    setServerError("");
    const lead: LeadInput = { ...formData };
    const result = await insertLead(lead);
    if (result.ok) {
      setStatus("success");
      setFormData(EMPTY_FORM);
      setErrors({});
    } else {
      setStatus("error");
      setServerError(
        result.error ?? "Ha ocurrido un error. Inténtalo de nuevo."
      );
    }
  }

  if (status === "success") {
    return (
      <div className="flex flex-col items-center justify-center gap-4 rounded-2xl border border-border bg-bg2 px-8 py-16 text-center">
        <div className="flex h-14 w-14 items-center justify-center rounded-full border border-[rgba(0,255,128,0.3)] bg-[rgba(0,255,128,0.08)] text-2xl text-live">
          ✓
        </div>
        <h3 className="font-display text-xl font-bold text-white">
          ¡Mensaje recibido!
        </h3>
        <p className="max-w-[320px] text-[14px] font-light leading-relaxed text-muted">
          Nos pondremos en contacto contigo en menos de 24 horas hábiles.
        </p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="mt-2 text-[13px] text-cyan underline-offset-4 hover:underline"
        >
          Enviar otro mensaje
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className="rounded-2xl border border-border bg-bg2 px-8 py-8"
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <InputField
          id="nombre"
          name="nombre"
          label="Nombre"
          placeholder="María García"
          value={formData.nombre}
          error={errors.nombre}
          required
          onChange={handleChange}
        />
        <InputField
          id="email"
          name="email"
          label="Correo electrónico"
          type="email"
          placeholder="maria@empresa.com"
          value={formData.email}
          error={errors.email}
          required
          onChange={handleChange}
        />
        <InputField
          id="empresa"
          name="empresa"
          label="Empresa"
          placeholder="Clínica García, S.L."
          value={formData.empresa}
          onChange={handleChange}
        />
        <InputField
          id="telefono"
          name="telefono"
          label="Teléfono"
          type="tel"
          placeholder="+34 600 000 000"
          value={formData.telefono}
          onChange={handleChange}
        />
      </div>

      <div className="mt-5">
        <label
          htmlFor="sector"
          className="mb-1.5 block text-[13px] font-medium text-muted"
        >
          Sector
        </label>
        <select
          id="sector"
          name="sector"
          value={formData.sector}
          onChange={handleChange}
          className="w-full rounded-xl border border-border bg-bg px-4 py-3 text-[15px] text-white focus:border-cyan focus:outline-none transition-colors appearance-none"
        >
          <option value="" disabled className="text-muted">
            Selecciona tu sector
          </option>
          {SECTORES.map((s) => (
            <option key={s} value={s} className="bg-bg2 text-white">
              {s}
            </option>
          ))}
        </select>
      </div>

      <div className="mt-5">
        <label
          htmlFor="mensaje"
          className="mb-1.5 block text-[13px] font-medium text-muted"
        >
          Mensaje <span className="text-cyan">*</span>
        </label>
        <textarea
          id="mensaje"
          name="mensaje"
          value={formData.mensaje}
          onChange={handleChange}
          rows={5}
          placeholder="Cuéntanos qué necesitas: volumen de llamadas, sector, integraciones…"
          className={`w-full resize-none rounded-xl border bg-bg px-4 py-3 text-[15px] text-white placeholder:text-muted/50 focus:outline-none transition-colors ${
            errors.mensaje
              ? "border-red-400/60 focus:border-red-400"
              : "border-border focus:border-cyan"
          }`}
        />
        {errors.mensaje && (
          <p className="mt-1.5 text-[12px] text-red-400">{errors.mensaje}</p>
        )}
      </div>

      {status === "error" && serverError && (
        <p className="mt-4 rounded-xl border border-red-400/20 bg-red-400/5 px-4 py-3 text-[13px] text-red-400">
          {serverError}
        </p>
      )}

      <button
        type="submit"
        disabled={status === "submitting"}
        className="mt-6 w-full rounded-xl bg-gradient px-6 py-3.5 text-[15px] font-bold text-bg shadow-[0_0_24px_rgba(0,212,255,0.25)] transition-all hover:-translate-y-0.5 hover:shadow-[0_0_36px_rgba(0,212,255,0.4)] disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:translate-y-0"
      >
        {status === "submitting" ? "Enviando…" : "Enviar mensaje"}
      </button>

      <p className="mt-4 text-center text-[12px] font-light text-muted">
        Respondemos en menos de 24 horas hábiles.
      </p>
    </form>
  );
}
