import { useState } from "react";

const useModal = () => {
  const [showNewProjectForm, setShowNewProjectForm] = useState(false);

  const handleCloseProjectForm = () => setShowNewProjectForm(false);
  const handleShowProjectForm = () => setShowNewProjectForm(true);
  return { showNewProjectForm, handleCloseProjectForm, handleShowProjectForm };
};

export default useModal;
