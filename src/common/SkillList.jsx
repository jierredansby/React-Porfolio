import Skills from "../sections/Skills/Skills"

function SkillList({src, skill}) {
  
  return (
    <span>
      <img src={src} alt="Checkmark icon" />
        <p>{skill}</p>
    </span>
  )
}

export default SkillList
