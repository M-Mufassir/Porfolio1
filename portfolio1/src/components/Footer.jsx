export function Footer({ brandProfile }) {
  return (
    <footer className="site-footer">
      <p>
        Copyright {new Date().getFullYear()} {brandProfile.name}. Built with React for a clean
        and professional portfolio presentation.
      </p>
    </footer>
  )
}
