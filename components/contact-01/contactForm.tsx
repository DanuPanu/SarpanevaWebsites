'use client'

import React from 'react'
import { useForm } from '@formspree/react'
import { Button } from '../ui/button'

export default function ContactForm() {
  const [state, handleSubmit] = useForm('xzzgoozw') // Vaihda tähän oikea ID

  if (state.succeeded) {
    return (
      <div className="text-center py-12">
        <h2 className="text-2xl font-semibold text-green-600">Kiitos viestistäsi!</h2>
        <p className="mt-2 text-gray-600">Otan sinuun pian yhteyttä.</p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-xl mx-auto space-y-6 p-6">
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-gray-700">
          Nimi
        </label>
        <input
          id="name"
          name="name"
          type="text"
          required
          className="mt-1 w-full rounded-md border border-gray-300 px-4 py-2 shadow-sm focus:border-primary focus:ring-2 focus:ring-primary focus:outline-none"
        />
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-700">
          Sähköposti
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          className="mt-1 w-full rounded-md border border-gray-300 px-4 py-2 shadow-sm focus:border-primary focus:ring-2 focus:ring-primary focus:outline-none"
        />
        <p className="mt-1 text-sm text-gray-500">Vastaan tähän osoitteeseen.</p>
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-gray-700">
          Viesti
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          className="mt-1 w-full rounded-md border border-gray-300 px-4 py-2 shadow-sm focus:border-primary focus:ring-2 focus:ring-primary focus:outline-none resize-y"
        ></textarea>
        <p className="mt-1 text-sm text-gray-500">Miten voisin auttaa?</p>
      </div>

      <div className="flex justify-end">
        <Button
          type="submit"
          disabled={state.submitting}
          className="rounded-full bg-primary px-6 py-3 text-white font-semibold transition hover:bg-primary/80 disabled:opacity-50 cursor-pointer"
        >
          {state.submitting ? 'Lähetetään...' : 'Lähetä viesti'}
        </Button>
      </div>
    </form>
  )
}
