export function Contact({ contactLinks }) {
  return (
    <section className="section-block" id="contact">
      <div className="section-heading">
        <span className="eyebrow">Contact</span>
        <h2>Ready for internships, graduate roles, and project collaboration.</h2>
        <p>
          Contact details are kept direct so the site works well as a live portfolio link in
          applications and outreach.
        </p>
      </div>

      <div className="contact-grid">
        {contactLinks.map((contact) => {
          const isExternal = /^https?:/i.test(contact.href)

          return (
            <article key={contact.label} className="contact-card">
              <span className="card-pill">{contact.label}</span>
              <h3>{contact.value}</h3>
              <p>{contact.note}</p>
              <a
                href={contact.href}
                target={isExternal ? '_blank' : undefined}
                rel={isExternal ? 'noreferrer' : undefined}
              >
                {contact.action}
              </a>
            </article>
          )
        })}
      </div>
    </section>
  )
}
