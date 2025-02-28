import { Modal } from "@/components/ui/Modal";
import { Button } from "@/components/ui/Button";

import Styled from "./DeletePropertyModal.styled";

type DeletePropertyModalProps = {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
  propertyTitle?: string;
  propertyId?: string;
};

const DeletePropertyModal: React.FC<DeletePropertyModalProps> = ({
  isOpen,
  onClose,
  onConfirm,
  propertyTitle,
  propertyId,
}) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Delete Property">
      <Styled.Content>
        <p>
          Are you sure you want to delete property "{propertyTitle}" (
          {propertyId})? This action cannot be undone.
        </p>
        <Styled.Actions>
          <Button variant="secondary" onClick={onClose}>
            Cancel
          </Button>
          <Button variant="primary" onClick={onConfirm}>
            Delete
          </Button>
        </Styled.Actions>
      </Styled.Content>
    </Modal>
  );
};

export default DeletePropertyModal;
