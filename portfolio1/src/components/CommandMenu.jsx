import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { Command } from 'cmdk'
import {
  Briefcase,
  Cpu,
  Download,
  FolderGit2,
  Home,
  Mail,
  Moon,
  Search,
  Sun,
  User,
  X,
} from 'lucide-react'

export function CommandMenu({
  open,
  setOpen,
  navigationItems,
  projectCards,
  onSelectProject,
  resumeLink,
  contactLinks,
  theme,
  toggleTheme,
  onCopyEmail,
}) {
  const navigate = useNavigate()

  useEffect(() => {
    const down = (e) => {
      if ((e.key === 'k' && (e.metaKey || e.ctrlKey)) || (e.key === '/' && document.activeElement === document.body)) {
        e.preventDefault()
        setOpen((prev) => !prev)
      }
    }
    window.addEventListener('keydown', down)
    return () => window.removeEventListener('keydown', down)
  }, [setOpen])

  const emailContact = contactLinks?.find((c) => c.label.toLowerCase() === 'email')

  const goToPage = (to) => {
    setOpen(false)
    navigate(to)
  }

  return (
    <Command.Dialog
      open={open}
      onOpenChange={setOpen}
      label="Portfolio Quick Navigation"
      className="cmdk-dialog"
    >
      <div className="cmdk-backdrop" onClick={() => setOpen(false)} aria-hidden="true" />
      <div className="cmdk-surface">
        <div className="cmdk-input-wrap">
          <Search size={17} className="cmdk-search-icon" aria-hidden="true" />
          <Command.Input
            placeholder="Navigate to a page, engineered system, or action..."
            className="cmdk-input"
          />
          <button
            type="button"
            onClick={() => setOpen(false)}
            className="cmdk-close-btn"
            aria-label="Close command palette"
          >
            <X size={15} />
          </button>
        </div>

        <Command.List className="cmdk-list" data-lenis-prevent>
          <Command.Empty className="cmdk-empty">No matching pages, systems, or commands found.</Command.Empty>

          <Command.Group heading="Pages" className="cmdk-group">
            {navigationItems.map((item) => (
              <Command.Item
                key={item.to}
                value={`page ${item.label}`}
                onSelect={() => goToPage(item.to)}
                className="cmdk-item"
              >
                {item.label === 'Home' && <Home size={15} />}
                {item.label === 'About' && <User size={15} />}
                {item.label === 'Projects' && <FolderGit2 size={15} />}
                {item.label === 'Experience' && <Briefcase size={15} />}
                {item.label === 'Contact' && <Mail size={15} />}
                <span>Open {item.label} Page</span>
              </Command.Item>
            ))}
          </Command.Group>

          <Command.Group heading="Engineered Systems" className="cmdk-group">
            {projectCards.map((project) => (
              <Command.Item
                key={project.title}
                value={`${project.title} ${project.domainLabel} ${project.stack.join(' ')}`}
                onSelect={() => {
                  setOpen(false)
                  navigate('/projects')
                  onSelectProject(project)
                }}
                className="cmdk-item"
              >
                <Cpu size={15} />
                <div className="cmdk-item-col">
                  <span>{project.title}</span>
                  <small>{project.domainLabel} • {project.type}</small>
                </div>
              </Command.Item>
            ))}
          </Command.Group>

          <Command.Group heading="Quick Actions" className="cmdk-group">
            <Command.Item
              value="download resume cv pdf"
              onSelect={() => {
                setOpen(false)
                const link = document.createElement('a')
                link.href = resumeLink.href
                link.download = ''
                link.click()
              }}
              className="cmdk-item"
            >
              <Download size={15} />
              <span>{resumeLink.label}</span>
            </Command.Item>

            {emailContact && (
              <Command.Item
                value="copy email address contact"
                onSelect={() => {
                  onCopyEmail(emailContact.value, 'Email')
                  setOpen(false)
                }}
                className="cmdk-item"
              >
                <Mail size={15} />
                <span>Copy Email ({emailContact.value})</span>
              </Command.Item>
            )}

            <Command.Item
              value="toggle dark light theme mode"
              onSelect={() => {
                toggleTheme()
                setOpen(false)
              }}
              className="cmdk-item"
            >
              {theme === 'dark' ? <Sun size={15} /> : <Moon size={15} />}
              <span>Switch to {theme === 'dark' ? 'Light' : 'Dark'} Mode</span>
            </Command.Item>
          </Command.Group>
        </Command.List>
      </div>
    </Command.Dialog>
  )
}
