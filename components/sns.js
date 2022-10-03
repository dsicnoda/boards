import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faTwitter,
  faFacebookF,
  faInstagram,
} from '@fortawesome/free-brands-svg-icons';

import styles from 'styles/sns.module.css';

export default function Sns() {
  return (
    <ul className={styles.sns}>
      <li>
        <a href="#">
          <FontAwesomeIcon icon={faTwitter} />
          <span className="sr-only">Twitter</span>
        </a>
      </li>
      <li>
        <a href="#">
          <FontAwesomeIcon icon={faFacebookF} />
          <span className="sr-only">Facebook</span>
        </a>
      </li>
      <li>
        <a href="#">
          <FontAwesomeIcon icon={faInstagram} />
          <span className="sr-only">Instagram</span>
        </a>
      </li>
    </ul>
  );
}
