import { useState } from "react";

// @ts-expect-error styles lib
import "react-modern-drawer/dist/index.css";

import { PropertyType } from "@/types/properties";
import { Button } from "@/components/ui/Button";
import { useCreateProperty } from "../../queries/properties-list";
import type { CreatePropertyPayload } from "@/api/properties";

import CloseIcon from "@/assets/icons/close.svg?react";

import Styled from "./CreatePropertyDrawer.styled";

interface CreatePropertyDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CreatePropertyDrawer = ({
  isOpen,
  onClose,
}: CreatePropertyDrawerProps) => {
  const { mutate: createProperty } = useCreateProperty();
  const [formData, setFormData] = useState<
    Omit<CreatePropertyPayload, "id" | "createdAt">
  >({
    title: "",
    name: "",
    address: "",
    price: "",
    type: PropertyType.APARTMENT,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const now = new Date().toISOString();
    createProperty({
      ...formData,
      createdAt: now,
    });
    onClose();
    setFormData({
      title: "",
      name: "",
      address: "",
      price: "",
      type: PropertyType.APARTMENT,
    });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <Styled.Drawer open={isOpen} onClose={onClose} direction="right">
      <Styled.DrawerContent>
        <Styled.Header>
          <Styled.Title>New property</Styled.Title>
          <Styled.CloseButton onClick={onClose}>
            <CloseIcon />
          </Styled.CloseButton>
        </Styled.Header>

        <Styled.Form onSubmit={handleSubmit}>
          <Styled.FormContent>
            <Styled.SectionTitle>Property details</Styled.SectionTitle>

            <Styled.InputGroup>
              <Styled.Label htmlFor="title">Property title</Styled.Label>
              <Styled.Input
                type="text"
                id="title"
                name="title"
                value={formData.title}
                onChange={handleInputChange}
                required
              />
            </Styled.InputGroup>

            <Styled.InputGroup>
              <Styled.Label htmlFor="name">Name</Styled.Label>
              <Styled.Input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                required
              />
            </Styled.InputGroup>

            <Styled.InputGroup>
              <Styled.Label htmlFor="address">Address</Styled.Label>
              <Styled.Input
                type="text"
                id="address"
                name="address"
                value={formData.address}
                onChange={handleInputChange}
                required
              />
            </Styled.InputGroup>

            <Styled.InputGroup>
              <Styled.Label htmlFor="type">Type</Styled.Label>
              <Styled.Select
                id="type"
                name="type"
                value={formData.type}
                onChange={handleSelect}
                required
              >
                <option value="">Select type</option>
                <option value={PropertyType.APARTMENT}>Apartment</option>
                <option value={PropertyType.HOUSE}>House</option>
              </Styled.Select>
            </Styled.InputGroup>

            <Styled.InputGroup>
              <Styled.Label htmlFor="price">Price</Styled.Label>
              <Styled.Input
                type="number"
                id="price"
                name="price"
                value={formData.price}
                onChange={handleInputChange}
                required
                placeholder="e.g. 3.500.000 €"
              />
            </Styled.InputGroup>
          </Styled.FormContent>

          <Styled.ButtonContainer>
            <Button type="submit" variant="primary">
              Create property
            </Button>
          </Styled.ButtonContainer>
        </Styled.Form>
      </Styled.DrawerContent>
    </Styled.Drawer>
  );
};
