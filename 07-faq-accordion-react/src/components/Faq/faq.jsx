import styles from "./styles.module.scss"

import Accordion from "../Accordion/accordion"
import FaqCubeImage from "../../assets/images/illustration-box-desktop.svg"
import FaqWomanImage from "../../assets/images/illustration-woman-online-desktop.svg"

function Faq() {
  return (
    <div className={styles.faqContainer}>
      <div className={styles.image}>
        {/* <img src={FaqCubeImage} alt="Image cube Faq" className={styles.cubeImage} /> */}
        <img src={FaqWomanImage} alt="Image Faq" className={styles.womanImage}/>
      </div>

      <div className={styles.content}>
        <h1 className={styles.title}>Faq</h1>
        <div className={styles.accordions}>
          <Accordion  title="How many team members can I invite?"/>
          <Accordion title="What is the maximum file upload size?"/>
          <Accordion title="Hoe do I reset my password?"/>
          <Accordion title="Can I cancel my subsciption?"/>
          <Accordion title="Do You provide additional support?"/>
        </div>
      </div>
    </div>
  )
}

export default Faq
