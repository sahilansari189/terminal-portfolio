export default function ContactOutput() {
  return (
    <div className="space-y-6 my-4">
      <div className="text-green-400 text-lg">Contact Information</div>

      {/* Primary Contact */}
      <div className="space-y-4">
        <div className="border border-green-600 p-4 rounded">
          <div className="text-green-300 font-semibold text-lg mb-3">Get In Touch</div>
          <div className="space-y-3 text-sm">
            <div className="flex items-center gap-3">
              <span className="text-green-500 w-16">Email:</span>
              <a href="mailto:sa760887@gmail.com" className="text-green-400 underline hover:text-green-300">
                sa760887@gmail.com
              </a>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-green-500 w-16">Phone:</span>
              <a href="tel:+919336621052" className="text-green-400 underline hover:text-green-300">
                +919336621052
              </a>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-green-500 w-16">Location:</span>
              <span className="text-green-400">Prayagraj, Uttar Pradesh</span>
            </div>
          </div>
        </div>

        {/* Social Media */}
        <div className="border border-green-600 p-4 rounded">
          <div className="text-green-300 font-semibold text-lg mb-3">Social Media</div>
          <div className="space-y-3 text-sm">
            <div className="flex items-center gap-3">
              <span className="text-green-500 w-16">GitHub:</span>
              <a href="https://github.com/sahilansari189" className="text-green-400 underline hover:text-green-300">
                github.com/sahilansari189
              </a>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-green-500 w-16">LinkedIn:</span>
              <a href="https://linkedin.com/in/sahilansari189" className="text-green-400 underline hover:text-green-300">
                linkedin.com/in/sahilansari189
              </a>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-green-500 w-16">Twitter:</span>
              <a href="https://x.com/sahilansari189" className="text-green-400 underline hover:text-green-300">
                x.com/sahilansari189
              </a>
            </div>
            {/* <div className="flex items-center gap-3">
              <span className="text-green-500 w-16">Portfolio:</span>
              <a href="https://sahilansari.in" className="text-green-400 underline hover:text-green-300">
                 sahilansari.in
              </a>
            </div> */}
          </div>
        </div>

        {/* Professional */}
        <div className="border border-green-600 p-4 rounded">
          <div className="text-green-300 font-semibold text-lg mb-3">Professional</div>
          <div className="space-y-3 text-sm">
            <div className="flex items-center gap-3">
              <span className="text-green-500 w-16">Resume:</span>
              <a href="/Sahil_Ansari_Resume.pdf" className="text-green-400 underline hover:text-green-300">
                Download PDF
              </a>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-green-500 w-16">Calendar:</span>
              <a href="https://calendly.com/sahilansari189" className="text-green-400 underline hover:text-green-300">
                Schedule a meeting
              </a>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-green-500 w-16">Status:</span>
              <span className="text-green-400">🟢 Available for new opportunities</span>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="border border-green-600 p-4 rounded">
          <div className="text-green-300 font-semibold text-lg mb-3">Quick Message</div>
          <div className="text-sm text-green-400 leading-relaxed">
            Want to get in touch quickly? You can reach out through any of the channels above, or send me a direct
            message on LinkedIn. I typically respond within 24 hours.
            <br />
            <br />
            <span className="text-green-500">Preferred contact methods:</span>
            <br />• Email for detailed discussions
            <br />• LinkedIn for professional inquiries
            <br />• Phone for urgent matters
            <br />• GitHub for technical questions
          </div>
        </div>
      </div>
    </div>
  )
}
