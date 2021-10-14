import { useState } from "react";

export const useModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [modalKey, setModalKey] = useState("");

  const openModal = (e) => {
    setIsOpen(true);
    setModalKey(e.target.id);
  };
  const closeModal = () => setIsOpen(false);

  return [isOpen, openModal, closeModal, modalKey];
};
