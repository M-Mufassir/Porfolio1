import { Cpu, GraduationCap, Layers, Zap } from 'lucide-react'
import { motion as Motion } from 'motion/react'
import { NumberTicker } from './TextAnimations'

const STAT_ICONS = {
  cpu: Cpu,
  layers: Layers,
  zap: Zap,
  graduation: GraduationCap,
}

export function StatsBar({ telemetryStats }) {
  return (
    <Motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
      className="stats-bar-shell"
      aria-label="Engineering Impact Metrics"
    >
      {telemetryStats.map((stat) => {
        const Icon = STAT_ICONS[stat.icon] || Cpu
        return (
          <div key={stat.label} className="stats-bar-item">
            <div className="stats-bar-icon" aria-hidden="true">
              <Icon size={18} />
            </div>
            <div className="stats-bar-value">
              {stat.shortValue ? (
                <span>{stat.shortValue}</span>
              ) : (
                <NumberTicker
                  value={stat.value}
                  prefix={stat.prefix || ''}
                  suffix={stat.suffix || ''}
                />
              )}
            </div>
            <div className="stats-bar-label">{stat.label}</div>
            <div className="stats-bar-detail">{stat.detail}</div>
          </div>
        )
      })}
    </Motion.section>
  )
}
