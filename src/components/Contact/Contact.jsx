import React from 'react'
import Heading from '../Heading/Heading'
import { useTranslation } from 'react-i18next'
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from 'react-icons/fa'

const Contact = () => {
  const { t } = useTranslation()

  return (
    <section className="pt-[12vh] md:pt-[14vh] bg-zinc-50/70">
      <div className="mx-auto flex max-w-[1400px] justify-center px-4 py-12 sm:px-6 sm:py-16 lg:px-10 lg:py-20">
        <div className="w-full max-w-[900px] rounded-3xl border border-zinc-100 bg-white p-6 shadow-[0_20px_60px_rgba(0,0,0,0.08)] sm:p-8 lg:p-12">
          <div className="mb-10 text-center sm:mb-12 lg:mb-16">
            <Heading
              highlight={t("contact.highlight")}
              heading={t("contact.heading")}
            />
            <p className="mx-auto mt-4 max-w-xl text-sm text-zinc-600 sm:text-base">
              {t("contact.subtitle")}
            </p>
          </div>

          <div className="grid items-start gap-8 lg:grid-cols-2 lg:gap-10 xl:gap-14">
            <div className="flex flex-col gap-y-4 sm:gap-y-5">
              <div className="flex items-start gap-x-4 rounded-2xl border border-zinc-100 bg-zinc-50/80 p-4 transition hover:-translate-y-1 hover:shadow-sm sm:gap-x-5 sm:p-5">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-gradient-to-b from-orange-400 to-orange-500 text-lg text-white sm:h-14 sm:w-14 sm:text-2xl">
                  <FaEnvelope />
                </span>
                <div>
                  <h4 className="text-lg font-bold text-zinc-800 sm:text-xl">
                    {t("contact.email.title")}
                  </h4>
                  <p className="mt-1 break-all text-sm text-zinc-600 sm:break-normal sm:text-base">
                    contatoseacardo19@gmail.com
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-x-4 rounded-2xl border border-zinc-100 bg-zinc-50/80 p-4 transition hover:-translate-y-1 hover:shadow-sm sm:gap-x-5 sm:p-5">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-gradient-to-b from-orange-400 to-orange-500 text-lg text-white sm:h-14 sm:w-14 sm:text-2xl">
                  <FaPhoneAlt />
                </span>
                <div>
                  <h4 className="text-lg font-bold text-zinc-800 sm:text-xl">
                    {t("contact.phone.title")}
                  </h4>
                  <p className="mt-1 text-sm text-zinc-600 sm:text-base">
                    +55 (31) 99999-9999
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-x-4 rounded-2xl border border-zinc-100 bg-zinc-50/80 p-4 transition hover:-translate-y-1 hover:shadow-sm sm:gap-x-5 sm:p-5">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-gradient-to-b from-orange-400 to-orange-500 text-lg text-white sm:h-14 sm:w-14 sm:text-2xl">
                  <FaMapMarkerAlt />
                </span>
                <div>
                  <h4 className="text-lg font-bold text-zinc-800 sm:text-xl">
                    {t("contact.address.title")}
                  </h4>
                  <p className="mt-1 text-sm text-zinc-600 sm:text-base">
                    Belo Horizonte - MG, Brasil
                  </p>
                </div>
              </div>
            </div>

            <form className="flex flex-col gap-y-4 rounded-3xl border border-zinc-100 bg-zinc-50/70 p-4 shadow-sm sm:gap-y-5 sm:p-6">
              <div>
                <label className="mb-2 block text-sm font-medium text-zinc-700 sm:text-base">
                  {t("contact.form.name")}
                </label>
                <input
                  type="text"
                  placeholder={t("contact.form.namePlaceholder")}
                  className="w-full rounded-xl border border-zinc-300 bg-white px-4 py-3 transition focus:border-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-200"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-zinc-700 sm:text-base">
                  {t("contact.form.email")}
                </label>
                <input
                  type="email"
                  placeholder={t("contact.form.emailPlaceholder")}
                  className="w-full rounded-xl border border-zinc-300 bg-white px-4 py-3 transition focus:border-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-200"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-zinc-700 sm:text-base">
                  {t("contact.form.message")}
                </label>
                <textarea
                  rows="5"
                  placeholder={t("contact.form.messagePlaceholder")}
                  className="w-full resize-none rounded-xl border border-zinc-300 bg-white px-4 py-3 transition focus:border-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-200"
                />
              </div>

              <button
                type="submit"
                className="rounded-xl bg-gradient-to-b from-orange-400 to-orange-500 px-6 py-3 text-base font-semibold text-white shadow-md transition-all duration-300 hover:scale-[1.01] hover:shadow-lg sm:px-8 sm:text-lg"
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
