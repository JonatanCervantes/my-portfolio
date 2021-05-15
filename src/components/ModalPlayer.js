import React, { forwardRef, useImperativeHandle, useState } from "react";
import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";
import ReactPlayer from "react-player/youtube";

const ModalPlayer = forwardRef((props, ref) => {
  const [open, setOpen] = useState(false);
  const onOpenModal = () => setOpen(true);
  const onCloseModal = () => setOpen(false);
  const videoUrl = props.videoUrl;

  useImperativeHandle(ref, () => ({
    onOpenModal,
  }));

  return (
    <div>
      <Modal
        open={open}
        onClose={onCloseModal}
        class
        styles={{
          modal: {
            width: "70%",
            height: "70%",
            padding: "0",
            margin: "0",
          },
          overlay: {
            background: "rgba(0, 0, 0, 0.5)",
          },
          closeButton: {
            background: "white",
          },
        }}
        center
      >
        <ReactPlayer
          url={videoUrl}
          width="100%"
          height="100%"
          styles={{ padding: "0", margin: "0" }}
          controls
          muted
        />
      </Modal>
    </div>
  );
});

export default ModalPlayer;
