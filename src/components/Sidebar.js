import { useState } from "react";
import Modal from "react-modal";
import { GrClose } from "react-icons/gr";

function Sidebar() {
  const [modalIsOpen, setModalIsOpen] = useState(false); //abaut brandColor için kapalır açılır sistem yapılmaktadır.

  const toggleModal = () => {
    setModalIsOpen(!modalIsOpen);
  };

  return (
    <>
      <aside className="sidebar">
        <div className="logo">
          <a>
            Brand<b>Colors</b>
          </a>
        </div>
        <div className="description">
          The biggest collection of official brand color codes around. Curated
          by @brandcolors and friends.
        </div>
        <nav className="menu">
          <ul>
            <li>
              <a onClick={toggleModal}>About BrandColors</a>
            </li>
          </ul>
        </nav>
      </aside>

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={toggleModal}
        className="about-modal"
        overlayClassName="about-modal-overlay"
      >
        <button className="modal-close-btn" onClick={toggleModal}>
          <GrClose />
        </button>
        <h3>About BrandColors</h3>
        <p>
          BrandColors was created by <span>DesignBombs</span>. The goal was to
          create a helpful reference for the brand color codes that are needed
          most often.
        </p>
        <p>
          It's been featured by Smashing Magazine, CSS-Tricks, Web Design Depot,
          Tuts+, and over <span>2 million pageviews</span>. There are now over{" "}
          <span>600 brands</span> with <span>1600 colors</span> and the
          collection is always growing.
        </p>
      </Modal>
    </>
  );
}

export default Sidebar;
