import { useForm } from "react-hook-form";
import { useState } from "react";
import { FaCheck, FaPaperPlane, FaTimes, FaLinkedin } from "react-icons/fa";
import { SiVercel } from "react-icons/si";
import { FiMail } from "react-icons/fi";
import { AnimatePresence } from "framer-motion";
import FadeIn from "@/components/effects/FadeIn";
import MotionDiv from "@/components/ui/MotionDiv";

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<"success" | "error" | null>(null);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data: any) => {
    setIsSubmitting(true);
    try {
      const response = await fetch("https://formspree.io/f/mgvajbkz", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(data),
      });
      if (response.ok) {
        setStatus("success");
        reset();
      } else throw new Error();
    } catch {
      setStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="contact"
      className="relative py-28 px-6 md:px-12 bg-background text-foreground overflow-hidden"
    >
      <div className="absolute top-10 left-10 w-32 h-32 rounded-full bg-rose-300 opacity-20 blur-3xl dark:bg-yellow-400" />
      <div className="absolute bottom-16 right-10 w-24 h-24 rounded-full bg-yellow-300 opacity-10 blur-2xl dark:bg-rose-500" />

      <div className="max-w-6xl mx-auto relative z-10 space-y-20 text-center">
        <FadeIn>
          <h2 className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-rose-700 to-yellow-400 bg-clip-text text-transparent mb-4">
            Let's Connect
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Have an idea, opportunity, or just want to say hi? I'm all ears.
          </p>
        </FadeIn>

        <div className="grid md:grid-cols-2 gap-12 items-start text-left">
          <FadeIn delay={0.1}>
            <div className="space-y-12">
              <div>
                <h3 className="text-xl font-semibold text-rose-600 dark:text-yellow-400 mb-2">
                  Contact Information
                </h3>
                <p className="text-neutral-600 dark:text-neutral-300 mb-6">
                  You can reach me directly via email or follow my work:
                </p>
                <a
                  href="mailto:mohammadsobh1999@gmail.com"
                  className="flex items-center gap-3 text-base text-muted-foreground hover:text-rose-700 dark:hover:text-yellow-400 transition"
                >
                  <FiMail className="text-xl" />
                  mohammadsobh1999@gmail.com
                </a>
                <div className="flex gap-4 pt-4">
                  <a
                    href="https://vercel.com/mohamadsobehs-projects"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-full bg-neutral-200 dark:bg-neutral-800 text-black dark:text-white hover:bg-rose-100 dark:hover:bg-yellow-900/30 transition"
                  >
                    <SiVercel />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/mohamad-sobeh-59b486277/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-full bg-blue-600 text-white hover:bg-blue-700 transition"
                  >
                    <FaLinkedin />
                  </a>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-rose-600 dark:text-yellow-400">
                  Current Availability
                </h3>
                <div className="grid gap-4">
                  {[
                    "Freelance projects",
                    "Full-time positions",
                    "Collaborations",
                  ].map((item, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-4 p-4 rounded-xl border border-border bg-gradient-to-br from-yellow-50 to-rose-50 dark:from-card dark:to-neutral-900 shadow-sm hover:shadow-md transition-all"
                    >
                      <div className="w-4 h-4 rounded-full bg-rose-600 dark:bg-yellow-400 shrink-0" />
                      <p className="text-muted-foreground font-medium">
                        {item}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={0.2}>
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="bg-gradient-to-br from-yellow-50 to-rose-50 dark:from-card dark:to-neutral-900 border border-border rounded-2xl p-8 space-y-6 shadow-md"
            >
              {["name", "email", "message"].map((field, i) => (
                <FadeIn key={field} delay={0.3 + i * 0.1}>
                  <div>
                    <label
                      htmlFor={field}
                      className="block mb-2 text-sm font-medium text-rose-600 dark:text-yellow-400"
                    >
                      {field === "message" ? "Your Message" : `Your ${field}`}
                    </label>
                    {field !== "message" ? (
                      <input
                        id={field}
                        type={field === "email" ? "email" : "text"}
                        {...register(field, {
                          required: `${field} is required`,
                          ...(field === "email" && {
                            pattern: {
                              value: /^\S+@\S+$/i,
                              message: "Invalid email address",
                            },
                          }),
                        })}
                        className="w-full px-4 py-3 rounded-lg bg-background border border-border focus:ring-2 focus:ring-rose-500 dark:focus:ring-yellow-400 transition"
                        placeholder={`Enter your ${field}`}
                      />
                    ) : (
                      <textarea
                        id={field}
                        rows={5}
                        {...register("message", {
                          required: "Message is required",
                        })}
                        className="w-full px-4 py-3 rounded-lg bg-background border border-border focus:ring-2 focus:ring-rose-500 dark:focus:ring-yellow-400 transition"
                        placeholder="Write your message..."
                      />
                    )}
                    {errors[field] && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors[field]?.message as string}
                      </p>
                    )}
                  </div>
                </FadeIn>
              ))}

              <FadeIn delay={0.6}>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full flex items-center justify-center gap-2 px-6 py-3 rounded-lg font-semibold text-white bg-gradient-to-r from-rose-600 to-yellow-400 hover:from-rose-700 hover:to-yellow-500 transition"
                >
                  {isSubmitting ? (
                    <span className="animate-pulse">Sending...</span>
                  ) : (
                    <>
                      <FaPaperPlane />
                      Send Message
                    </>
                  )}
                </button>
              </FadeIn>

              <AnimatePresence>
                {status && (
                  <MotionDiv
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className={`mt-4 p-3 rounded-md text-sm flex items-center gap-3 ${
                      status === "success"
                        ? "bg-green-100 text-green-700 dark:bg-green-900/30"
                        : "bg-red-100 text-red-700 dark:bg-red-900/30"
                    }`}
                  >
                    {status === "success" ? (
                      <>
                        <FaCheck /> Message sent successfully!
                      </>
                    ) : (
                      <>
                        <FaTimes /> Failed to send. Please try again.
                      </>
                    )}
                  </MotionDiv>
                )}
              </AnimatePresence>
            </form>
          </FadeIn>
        </div>
      </div>
    </section>
  );
};

export default Contact;
