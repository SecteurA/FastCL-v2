import emailjs from '@emailjs/browser';
import { EmailJSResponseStatus } from '@emailjs/browser';

interface EmailParams {
  serviceId: string;
  templateId: string;
  publicKey: string;
  form: HTMLFormElement;
}

export async function sendEmail({
  serviceId,
  templateId,
  publicKey,
  form
}: EmailParams): Promise<EmailJSResponseStatus> {
  try {
    const response = await emailjs.sendForm(
      serviceId,
      templateId,
      form,
      publicKey
    );
    return response;
  } catch (error) {
    console.error('Email sending error:', error);
    throw error;
  }
}