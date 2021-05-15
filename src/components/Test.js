// import React from "react";
// import { makeStyles } from "@material-ui/core/styles";
// import Modal from "@material-ui/core/Modal";
// import { Grow } from "@material-ui/core";
// import ReactPlayer from "react-player";

// const useStyles = makeStyles((theme) => ({
//   playerWrapper: {
//     position: "relative",
//     paddingTop: " 56.25%" /* 720 / 1280 = 0.5625 */,
//   },

//   reactPlayer: {
//     position: "absolute",
//     top: 0,
//     left: 0,
//   },

//   paper: {
//     position: "absolute",
//     width: 400,
//     height: 600,
//     top: " 50%",
//     bottom: "50%",
//     transform: `translate(-50%, -50%)`,
//   },
// }));

// export default function SimpleModal() {
//   const classes = useStyles();
//   const [open, setOpen] = React.useState(false);

//   const handleOpen = () => {
//     setOpen(true);
//   };

//   const handleClose = () => {
//     setOpen(false);
//   };

//   const body = (
//     <div className={classes.paper}>
//       <div className="player-wrapper">
//         <ReactPlayer
//           url="https://www.youtube.com/watch?v=1fx1hh3m1Fw&list=RDw2y715XAmso&index=5"
//           className="react-player"
//           playing
//           width="100%"
//           height="100%"
//         />
//       </div>
//     </div>
//   );

//   return (
//     <div>
//       <button type="button" onClick={handleOpen}>
//         Open Modal
//       </button>
//       <Modal
//         open={open}
//         onClose={handleClose}
//         aria-labelledby="simple-modal-title"
//         aria-describedby="simple-modal-description"
//       >
//         <Grow in={open} timeout={2000}>
//           {body}
//         </Grow>
//       </Modal>
//     </div>
//   );
// }

// import React, { useState } from "react";
// import "react-responsive-modal/styles.css";
// import { Modal } from "react-responsive-modal";

// function SimpleModal() {
//   const [open, setOpen] = useState(false);

//   const onOpenModal = () => setOpen(true);
//   const onCloseModal = () => setOpen(false);

//   return (
//     <div>
//       <button onClick={onOpenModal}>Open modal</button>
//       <Modal open={open} onClose={onCloseModal} center>
//         <h2>Simple centered modal</h2>
//       </Modal>
//     </div>
//   );
// }

// export default SimpleModal;
