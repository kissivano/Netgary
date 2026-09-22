import { ArrowLeft, Send } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";

function QuotePage({ language, setLanguage, t }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    source: "",
    project: "",
  });

  const [status, setStatus] = useState("idle");

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    if (status !== "idle") {
      setStatus("idle");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setStatus("loading");

    try {
      const response = await fetch("/api/send-quote", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formData,
          language,
        }),
      });

      if (!response.ok) {
        throw new Error("Request failed");
      }

      setStatus("success");

      setFormData({
        name: "",
        email: "",
        source: "",
        project: "",
      });
    } catch (error) {
      console.error(error);
      setStatus("error");
    }
  };

  return (
    <main className="min-h-screen bg-white">
      {/* HEADER */}
      <header className="border-b border-border bg-white">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6 md:h-20 lg:px-8">
          <Link
            to="/"
            className="font-heading text-2xl font-bold tracking-tight text-brand"
          >
            NETGARY
          </Link>

          <div className="flex items-center gap-5">
            {/* LANGUAGE */}
            <div className="flex items-center gap-2 text-xs font-medium">
              <button
                type="button"
                onClick={() => setLanguage("hu")}
                className={`transition duration-300 ${
                  language === "hu"
                    ? "text-brand"
                    : "text-zinc-300 hover:text-brand"
                }`}
              >
                HU
              </button>

              <span className="text-zinc-300">/</span>

              <button
                type="button"
                onClick={() => setLanguage("en")}
                className={`transition duration-300 ${
                  language === "en"
                    ? "text-brand"
                    : "text-zinc-300 hover:text-brand"
                }`}
              >
                EN
              </button>
            </div>

            {/* BACK */}
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-sm font-medium text-zinc-500 transition duration-300 hover:text-brand"
            >
              <ArrowLeft size={16} strokeWidth={1.8} />
              {t.quote.back}
            </Link>
          </div>
        </div>
      </header>

      {/* CONTENT */}
      <section className="mx-auto max-w-4xl px-6 py-14 lg:px-8 lg:py-20">
        <p className="mb-4 text-xs font-medium uppercase tracking-[0.22em] text-zinc-400">
          {t.quote.label}
        </p>

        <h1 className="font-heading text-5xl font-semibold leading-[0.95] tracking-[-0.04em] text-brand sm:text-6xl lg:text-7xl">
          {t.quote.title1}
          <br />

          <span className="text-brand-light">{t.quote.title2}</span>
        </h1>

        <p className="mt-7 max-w-xl text-base leading-7 text-zinc-500">
          {t.quote.description}
        </p>

        {/* FORM */}
        <form
          onSubmit={handleSubmit}
          className="mt-12 border-t border-border pt-10"
        >
          <div className="grid gap-8 sm:grid-cols-2">
            {/* NAME */}
            <div>
              <label
                htmlFor="name"
                className="mb-3 block text-xs font-medium uppercase tracking-[0.15em] text-zinc-400"
              >
                {t.quote.form.name}
              </label>

              <input
                id="name"
                name="name"
                type="text"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder={t.quote.form.namePlaceholder}
                className="w-full border-0 border-b border-border bg-transparent px-0 py-3 text-base text-brand outline-none transition placeholder:text-zinc-300 focus:border-brand"
              />
            </div>

            {/* EMAIL */}
            <div>
              <label
                htmlFor="email"
                className="mb-3 block text-xs font-medium uppercase tracking-[0.15em] text-zinc-400"
              >
                {t.quote.form.email}
              </label>

              <input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder={t.quote.form.emailPlaceholder}
                className="w-full border-0 border-b border-border bg-transparent px-0 py-3 text-base text-brand outline-none transition placeholder:text-zinc-300 focus:border-brand"
              />
            </div>
          </div>

          {/* SOURCE */}
          <div className="mt-8">
            <label
              htmlFor="source"
              className="mb-3 block text-xs font-medium uppercase tracking-[0.15em] text-zinc-400"
            >
              {t.quote.form.source}
            </label>

            <select
              id="source"
              name="source"
              value={formData.source}
              onChange={handleChange}
              required
              className="w-full border-0 border-b border-border bg-transparent px-0 py-3 text-base text-brand outline-none transition focus:border-brand"
            >
              <option value="">{t.quote.form.sourcePlaceholder}</option>

              <option value="instagram">Instagram</option>
              <option value="facebook">Facebook</option>
              <option value="google">Google</option>

              <option value="recommendation">
                {t.quote.form.recommendation}
              </option>

              <option value="other">{t.quote.form.other}</option>
            </select>
          </div>

          {/* PROJECT */}
          <div className="mt-8">
            <label
              htmlFor="project"
              className="mb-3 block text-xs font-medium uppercase tracking-[0.15em] text-zinc-400"
            >
              {t.quote.form.project}
            </label>

            <textarea
              id="project"
              name="project"
              rows="6"
              value={formData.project}
              onChange={handleChange}
              required
              placeholder={t.quote.form.projectPlaceholder}
              className="w-full resize-none rounded-[18px] border border-border bg-zinc-50/50 px-5 py-4 text-base leading-7 text-brand outline-none transition placeholder:text-zinc-300 focus:border-brand"
            />
          </div>

          {/* BOTTOM */}
          <div className="mt-8 flex flex-col items-start gap-4 sm:items-end">
            <button
              type="submit"
              disabled={status === "loading"}
              className="inline-flex items-center gap-2 rounded-full bg-brand px-6 py-3.5 text-sm font-medium text-white transition duration-300 hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-50"
            >
              {status === "loading"
                ? t.quote.form.sending
                : t.quote.form.submit}

              <Send size={16} strokeWidth={1.8} />
            </button>

            {status === "success" && (
              <p className="text-sm leading-6 text-emerald-600">
                {t.quote.form.success}
              </p>
            )}

            {status === "error" && (
              <p className="text-sm leading-6 text-red-500">
                {t.quote.form.error}
              </p>
            )}
          </div>
        </form>
      </section>
    </main>
  );
}

export default QuotePage;
