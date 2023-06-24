import React from 'react';
import { motion } from 'framer-motion';
import { perks } from '@/constants/perks';
import s from './Benefits.module.scss';
import { useInView } from 'react-intersection-observer';

const Benefits = () => {
  const animationDelay = 0.2;
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  return (
    <div className={s.benefits} ref={ref}>
      <div className="container">
        <div className={s.benefits_wrapper}>
          <div className={s.benefits_list}>
            <motion.h6
              className={s.benefits_list_title}
              initial={{ opacity: 0, y: -20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
              transition={{ duration: 0.5, delay: animationDelay }}
            >
              Benefit
            </motion.h6>
            <motion.h3
              className={s.benefits_list_desc}
              initial={{ opacity: 0, y: -20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
              transition={{ duration: 0.5, delay: animationDelay + 0.1 }}
            >
              Benefit You Get When Using Our Services
            </motion.h3>
            <motion.h2
              className={s.benefits_list_number}
              initial={{ opacity: 0, y: -20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
              transition={{ duration: 0.5, delay: animationDelay + 0.2 }}
            >
              600+
            </motion.h2>
            <motion.p
              className={s.benefits_list_info}
              initial={{ opacity: 0, y: -20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
              transition={{ duration: 0.5, delay: animationDelay + 0.3 }}
            >
              Home Furniture throughout Indonesia
            </motion.p>
            <motion.h2
              className={s.benefits_list_number}
              initial={{ opacity: 0, y: -20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
              transition={{ duration: 0.5, delay: animationDelay + 0.4 }}
            >
              135+
            </motion.h2>
            <motion.p
              className={s.benefits_list_info}
              initial={{ opacity: 0, y: -20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
              transition={{ duration: 0.5, delay: animationDelay + 0.5 }}
            >
              Staff ready to help you
            </motion.p>
          </div>
          <div className={s.benefits_perks}>
            {perks.map((item, index) => (
              <motion.div
                className={s.benefits_perks_card}
                key={item.title}
                initial={{ opacity: 0, y: -20 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
                transition={{ duration: 0.5, delay: animationDelay + index * 0.1 }}
              >
                <motion.div
                  className={s.benefits_perks_icon}
                  initial={{ scale: 0 }}
                  animate={inView ? { scale: 1 } : { scale: 0 }}
                  transition={{ duration: 0.5, delay: animationDelay + index * 0.1 + 0.1 }}
                >
                  {item.icon}
                </motion.div>
                <div>
                  <motion.h3
                    className={s.benefits_perks_card_title}
                    initial={{ opacity: 0 }}
                    animate={inView ? { opacity: 1 } : { opacity: 0 }}
                    transition={{ duration: 0.5, delay: animationDelay + index * 0.1 + 0.2 }}
                  >
                    {item.title}
                  </motion.h3>
                  <motion.p
                    className={s.benefits_perks_card_desc}
                    initial={{ opacity: 0 }}
                    animate={inView ? { opacity: 1 } : { opacity: 0 }}
                    transition={{ duration: 0.5, delay: animationDelay + index * 0.1 + 0.3 }}
                  >
                    {item.desc}
                  </motion.p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Benefits;
