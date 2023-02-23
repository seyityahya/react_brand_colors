import { useState } from 'react'
import Modal from "react-modal"

function Sidebar() {

    const [modalIsOpen, setModalIsOpen] = useState(false); //abaut brandColor için kapalır açılır sistem yapılmaktadır.

    const toggleModal = () => {
        setModalIsOpen(!modalIsOpen);
    }

  return (
    <>
    <aside className='sidebar'>
        <div className='logo'>
            <a>Brand<b>Colors</b></a>
        </div>
        <div className='description'>
        The biggest collection of official brand color codes around. Curated by @brandcolors and friends.
        </div>
        <nav className='menu'>
            <ul>
                <li>
                    <a onClick={toggleModal}>About BrandColors</a>
                </li>
            </ul>
        </nav>
    </aside>

    <Modal  
        isOpen={modalIsOpen}
        onRequestClose={toggleModal}>

        <button onClick={toggleModal}>close</button>
        <div>I am a modal</div>
        <form>
            <input/>
            <button>tab navigation</button>
            <button>stays</button>
            <button>inside</button>
            <button>the modal</button>
        </form>
    </Modal>
    </>
  )
}

export default Sidebar