import styles from '@/styles/ColorScale.module.css';

export default function ColorScale() {
  return (
    <svg className={styles.colorscale} width="800" height="20" version="1.1" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="Gradient2" x1="0" x2="1" y1="0" y2="0">
          <stop offset="0%" stopColor="yellow" />
          <stop offset="100%" stopColor="red" />
        </linearGradient>
      </defs>
  
      <rect x="10" y="0" width="100%" height="100%" fill="url(#Gradient2)" />
    </svg>
  )
}

// TODO: Need to add on-hover text