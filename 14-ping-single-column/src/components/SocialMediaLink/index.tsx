import styles from './styles.module.scss'


type SocialMediaType = {
  logo: string;
  alt: string;
  href:string;
}

export const SocialMediaLink = ({logo, alt, href} : SocialMediaType) => {
  return (
      <a href={href} target="_blank" className={styles.socialMediaLink}>
        <img src={logo} alt={alt} />
      </a>
  )
}
