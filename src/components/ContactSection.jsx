import { Instagram, Linkedin, Mail, MapPin, Phone, Send } from "lucide-react";
import { cn } from "@/lib/utils";
import { toast } from "react-toastify";
import { useState } from "react";
import emailjs from "@emailjs/browser"


export const ContactSection = () => {

    const [isSubmitting, setIsSubmitting] = useState(false)

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

 const handleSubmit = (e) => {
  e.preventDefault()
  setIsSubmitting(true)

  emailjs
    .send(
      "service_pdzksqs",
      "template_kqcuqar",
      {
        name: formData.name,
        email: formData.email,
        message: formData.message,
      },
      "L7EEAr4MvMXs1GW48"
    )
    .then(() => {
      toast.success("Message sent!")

      // clear form
      setFormData({
        name: "",
        email: "",
        message: "",
      })

      setIsSubmitting(false)
    })
    .catch(() => {
      toast.error("Failed to send message. Try again.")
      setIsSubmitting(false)
    })
}

    return (
        <section
            id="contact"
            className="py-24 px-4 relative bg-secondary/30"
        >
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-2xl md:text-3xl font-bold mb-4 text-center">
                    Get In <span className="text-primary">Touch</span>
                </h2>

                <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                    Have a project in mind or want to collaborate? Feel free to reach out.
                    I'm always open to discussing new opportunities.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    <div className=" space-x-8 ">
                        <h3 className="text-xl font-semibold mb-10 ">Contact Information</h3>

                        <div className="space-y-10 justify-center">
                            <div className="flex items-start gap-3 space-x-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <Mail className="h-5 w-5 text-primary" />
                                </div>

                                <div>
                                    <h4 className="font-medium text-center">Email</h4>
                                    <a className="text-muted-foreground hover:text-primary text-center transition-colors" href="mailto:saranyavanamutham@gmail.com">saranyavanamutham@gmail.com</a>
                                </div>
                            </div>
                            <div className="flex items-start gap-3 space-x-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <Phone className="h-5 w-5 text-primary" />
                                </div>

                                <div>
                                    <h4 className="font-medium text-center">Phone</h4>
                                    <a className="text-muted-foreground text-center hover:text-primary transition-colors" href="tel:+918667860773">+91 8667860773</a>
                                </div>
                            </div>
                            <div className="flex items-start gap-3 space-x-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <MapPin className="h-5 w-5 text-primary" />
                                </div>

                                <div>
                                    <h4 className="font-medium text-center">Location</h4>
                                    <p className="text-muted-foreground text-center">Dharmapuri, India</p>
                                </div>
                            </div>

                        </div>



                        <div className="p-8">
                            <h4 className="font-medium text-xl mt-10 mb-4 ">Connect With Me</h4>
                            <div className="flex justify-center space-x-4">
                                <a href="https://lnkd.in/gwQHnwTC" target="_blank">
                                    <Linkedin className="h-6 w-6 text-primary" />
                                </a>
                                <a href="https://www.instagram.com/ch_ara9157?igsh=NTE3bGplcGFlN3Jr" target="_blank">
                                    <Instagram className="h-6 w-6 text-primary" />
                                </a>

                            </div>


                        </div>

                    </div>



                    <div className="bg-card p-8 rounded-lg shadow-xs">
                        <h3 className="text-xl font-semibold mb-4">Send a message</h3>
                        <form className="space-y-4"
                            onSubmit={handleSubmit}>
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium mb-2">Your Name</label>
                                <input type="text" id="name" name="name" value={formData.name} placeholder="your name"
                                 onChange={handleChange} className="w-full px-4 py-3 border rounded-lg focus:outline-hidden bg-background" />
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-muted-foreground mb-2">Your Email</label>
                                <input type="email" id="email" value={formData.email} placeholder="email"
                                 onChange={handleChange} name="email" className="w-full px-4 py-2 border rounded-lg bg-background focus:outline-hidden" />
                            </div>
                            <div>
                                <label htmlFor="message" className="block text-sm font-medium  mb-1">Your Message</label>
                                <textarea id="message" name="message"  value={formData.message} placeholder="message...."
                                 onChange={handleChange} rows={4} className="w-full px-4 py-2 border rounded-lg focus:outline-hidden bg-background"></textarea>
                            </div>
                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className={cn(
                                    "cosmic-button w-full flex items-center justify-center gap-2"
                                )}
                            >
                                {isSubmitting ? "Sending..." : "Send Message"}
                                <Send size={16} />
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};
