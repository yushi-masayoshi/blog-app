import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import "./Navbar.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRightToBracket, faFilePen, faHouse } from '@fortawesome/free-solid-svg-icons'
import { AuthFlagContext } from './providers/AuthFlagProvider';

const Navbar = () => {
  const { isAuth } = useContext(AuthFlagContext);
  return (
    <nav>
      <Link to="/"><FontAwesomeIcon icon={faHouse} />ホーム</Link>
      {!isAuth ? (<Link to="/login"><FontAwesomeIcon icon={faArrowRightToBracket} />ログイン</Link>) : (
        <>
          <Link to="/createpost"><FontAwesomeIcon icon={faFilePen} />記事投稿</Link>
          <Link to="/logout"><FontAwesomeIcon icon={faArrowRightToBracket} />ログアウト</Link>
        </>        
      )}
      
    </nav>
  )
}

export default Navbar