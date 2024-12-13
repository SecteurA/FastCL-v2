'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send } from 'lucide-react';
import emailjs from '@emailjs/browser';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      await emailjs.sendForm(
        'fastcl.com@gmail.com',
        'Contact_page',
        e.target as HTMLFormElement,
        'kmxE6-CaCVy4_Lpke'
      );
      
      toast({
        title: "Message envoyé",
        description: "Nous vous répondrons dans les plus brefs délais.",
      });
      
      (e.target as HTMLFormElement).reset();
    } catch (error) {
      console.error('Error sending email:', error);
      toast({
        title: "Erreur",
        description: "Une erreur est survenue lors de l'envoi du message. Veuillez réessayer.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="bg-gray-900 rounded-2xl p-8"
    >
      <h3 className="text-2xl font-semibold mb-6">Contactez-nous</h3>
      
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <Input
            name="from_name"
            type="text"
            placeholder="Nom"
            required
            className="bg-gray-800 border-gray-700 text-white placeholder:text-gray-400"
          />
          <Input
            name="user_email"
            type="email"
            placeholder="Email"
            required
            className="bg-gray-800 border-gray-700 text-white placeholder:text-gray-400"
          />
        </div>
        
        <Input
          name="subject"
          type="text"
          placeholder="Sujet"
          required
          className="bg-gray-800 border-gray-700 text-white placeholder:text-gray-400"
        />
        
        <Textarea
          name="message"
          placeholder="Message"
          required
          className="bg-gray-800 border-gray-700 text-white placeholder:text-gray-400 min-h-[120px]"
        />
        
        <Button
          type="submit"
          className="w-full bg-[#f0562b] hover:bg-black text-white"
          disabled={isSubmitting}
        >
          {isSubmitting ? (
            "Envoi en cours..."
          ) : (
            <>
              Envoyer
              <Send className="ml-2 h-4 w-4" />
            </>
          )}
        </Button>
      </form>
    </motion.div>
  );
}