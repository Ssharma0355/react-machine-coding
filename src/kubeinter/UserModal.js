import React from 'react'

const UserModal = ({openModal, closeModal, user}) => {
    if(!openModal) return null
  return (
    <div style={styles.overlay} onClick={closeModal} >
        <div style={styles.modal} onChange={(e)=>e.stopPropagation()}>
            <p>{user?.name}</p>
            <p>{user?.address?.street}</p>
            <button style={styles.close} onClick={closeModal}>X</button>
        </div>
    </div>
  )
}

const styles={
    overlay: {
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%", 
        background: "rgba(0,0,0,0.5)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      },
      modal: {
        background: "#fff",
        padding: "20px",
        borderRadius: "10px",
        minWidth: "300px",
      },
    close:{
        padding:"2px"
    }
}

export default UserModal
