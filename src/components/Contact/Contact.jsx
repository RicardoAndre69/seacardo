import React from 'react'
import Heading from '../Heading/Heading'
import { useTranslation } from 'react-i18next'
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from 'react-icons/fa'

const Contact = () => {

  const { t } = useTranslation()

  return (
    <section className="pt-[12vh] md:pt-[14vh]">
      <div className="max-w-[1400px] mx-auto px-10 py-20 flex justify-center">

        {/* CARD CENTRAL */}
        <div className="w-full max-w-[900px] bg-white rounded-2xl shadow-xl p-12">

          {/* Heading */}
          <div className="text-center mb-16">
            <Heading
              highlight={t("contact.highlight")}
              heading={t("contact.heading")}
            />
            <p className="text-zinc-600 mt-4 max-w-xl mx-auto">
              {t("contact.subtitle")}
            </p>
          </div>

          {/* Conteúdo */}
          <div className="grid md:grid-cols-2 gap-14 items-start">

            {/* Informações */}
            <div className="flex flex-col gap-y-10">

              <div className="flex items-start gap-x-5">
                <span className="text-2xl text-white bg-gradient-to-b from-orange-400 to-orange-500 w-14 h-14 flex items-center justify-center rounded-full">
                  <FaEnvelope />
                </span>
                <div>
                  <h4 className="text-xl font-bold text-zinc-800">
                    {t("contact.email.title")}
                  </h4>
                  <p className="text-zinc-600 mt-1">
                    contatoseacardo19@gmail.com
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-x-5">
                <span className="text-2xl text-white bg-gradient-to-b from-orange-400 to-orange-500 w-14 h-14 flex items-center justify-center rounded-full">
                  <FaPhoneAlt />
                </span>
                <div>
                  <h4 className="text-xl font-bold text-zinc-800">
                    {t("contact.phone.title")}
                  </h4>
                  <p className="text-zinc-600 mt-1">
                    +55 (31) 99999-9999
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-x-5">
                <span className="text-2xl text-white bg-gradient-to-b from-orange-400 to-orange-500 w-14 h-14 flex items-center justify-center rounded-full">
                  <FaMapMarkerAlt />
                </span>
                <div>
                  <h4 className="text-xl font-bold text-zinc-800">
                    {t("contact.address.title")}
                  </h4>
                  <p className="text-zinc-600 mt-1">
                    Belo Horizonte - MG, Brasil
                  </p>
                </div>
              </div>

            </div>

            {/* Formulário */}
            <form className="flex flex-col gap-y-6">

              <div>
                <label className="block text-zinc-700 font-medium mb-2">
                  {t("contact.form.name")}
                </label>
                <input
                  type="text"
                  placeholder={t("contact.form.namePlaceholder")}
                  className="w-full px-4 py-3 rounded-lg border-2 border-black focus:outline-none focus:border-orange-500 transition"
                />
              </div>

              <div>
                <label className="block text-zinc-700 font-medium mb-2">
                  {t("contact.form.email")}
                </label>
                <input
                  type="email"
                  placeholder={t("contact.form.emailPlaceholder")}
                  className="w-full px-4 py-3 rounded-lg border-2 border-black focus:outline-none focus:border-orange-500 transition"
                />
              </div>

              <div>
                <label className="block text-zinc-700 font-medium mb-2">
                  {t("contact.form.message")}
                </label>
                <textarea
                  rows="5"
                  placeholder={t("contact.form.messagePlaceholder")}
                  className="w-full px-4 py-3 rounded-lg border-2 border-black focus:outline-none focus:border-orange-500 resize-none transition"
                />
              </div>

              <button
                type="submit"
                className="bg-gradient-to-b from-orange-400 to-orange-500 text-white px-8 py-3 rounded-lg text-lg hover:scale-105 transition-all duration-300"
              >
                {t("contact.form.button")}
              </button>

            </form>

          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
