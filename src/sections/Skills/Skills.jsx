import styles from './SkillsStyles.module.css'
import checkMarkIcon from '../../assets/checkmark-dark.svg'
import SkillList from '../../common/SkillList'
import checkmarkLight from '../../assets/checkmark-light.svg'
import checkmarkDark from '../../assets/checkmark-dark.svg'
import { useTheme } from '../../common/ThemeContext'

function Skills() {
  const {theme, toggleTheme} = useTheme();
  const checkMarkIcon = theme === 'light' ? checkmarkLight : checkmarkDark;

  
  return (
    <section id= "skills" className={styles.container}>
        <h1 className='sectionTitle'>Skills</h1>
        <div className={styles.skillList}>
            <SkillList src={checkMarkIcon} skill={"HTMl"} />
            <SkillList src={checkMarkIcon} skill={"CSS"} />
            <SkillList src={checkMarkIcon} skill={"JavaScript"} />
            <SkillList src={checkMarkIcon} skill={"Node JS"} />
            <SkillList src={checkMarkIcon} skill={"React"} />
            <SkillList src={checkMarkIcon} skill={"SQL"} />
            <SkillList src={checkMarkIcon} skill={"C#"} />
        <hr />
        </div>
    </section>
  )
}

export default Skills
