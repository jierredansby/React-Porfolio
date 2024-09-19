import styles from './HeroStyles.module.css'
import heroImg from '../../assets/Logo.png'
import sun from '../../assets/sun.svg'
import moon from '../../assets/moon.svg'
import twitterLight from '../../assets/twitter-light.svg'
import twitterDark from '../../assets/twitter-dark.svg'
import githubLight from '../../assets/github-light.svg'
import githubDark from '../../assets/github-dark.svg'
import linkedinLight from '../../assets/linkedin-light.svg'
import linkedinDark from '../../assets/linkedin-dark.svg'
import CV from '../../assets/Resume.Jie.png'
import { useTheme } from '../../common/ThemeContext'
function Hero() {
    const {theme, toggleTheme} = useTheme();
    const themeIcon = theme === 'light' ? sun : moon;
    const twitterIcon = theme === 'light' ? twitterLight : twitterDark;
    const githubIcon = theme === 'light' ? githubLight : githubDark;
    const linkedinIcon = theme === 'light' ? linkedinLight : linkedinDark;
  return (
    <section id="hero" className={styles.container}>
        <div className={styles.colorModeContainer}>
            <img className={styles.hero}
             src={heroImg}
              alt="Profile Picture Jierre Dansby"
               />
            <img className={styles.colorMode}
             src={themeIcon}
              alt="Color mode icon"
              onClick={toggleTheme}
               />
        </div>
        <div className={styles.info}>
            <h1>
                Jierre
                <br />
                Dansby
            </h1>
            <h2>Frontend Developer</h2>
            <span>
                <a href="https://twitter.com/jierre_" target='_blank'>
                <img src={twitterIcon} alt="Twitter Icon"/>
                </a>
                <a href="https://github.com/jierredansby" target='_blank'>
                <img src={githubIcon} alt="Github Icon"/>
                </a>
                <a href="https://www.linkedin.com/public-profile/settings?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_self_edit_contact-info%3BFzLFFaLBQQyD5X2h5D5Q1w%3D%3D" target='_blank'>
                <img src={linkedinIcon} alt="LinkedIn Icon"/>
                </a>
            </span>
            <p className={styles.description}>With a passion for developing for commercial businesses
            </p>
            <a href={CV} download>
                <button className="hover">Resume</button>
            </a>
        </div>
    </section>
  )
}

export default Hero
