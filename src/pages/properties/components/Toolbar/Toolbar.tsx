import { useState } from "react";
import { CreatePropertyDrawer } from "./CreatePropertyDrawer";
import { PropertyType } from "@/types/properties";
import Styled from "./Toolbar.styled";

export type SortOrder = "asc" | "desc";

export interface ToolbarFilters {
  type: PropertyType | "all";
  priceSort: SortOrder;
  search: string;
}

const Toolbar = ({
  onFiltersChange,
  filters,
}: {
  onFiltersChange: (filters: ToolbarFilters) => void;
  filters: ToolbarFilters;
}) => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const handleFilterChange = (
    key: keyof ToolbarFilters,
    value: PropertyType | "all" | SortOrder | string
  ) => {
    onFiltersChange({
      ...filters,
      [key]: value,
    });
  };

  return (
    <>
      <Styled.Container>
        <Styled.FiltersContainer>
          <Styled.Group>
            <Styled.SearchInput
              type="text"
              placeholder="Search properties..."
              value={filters.search}
              onChange={(e) => handleFilterChange("search", e.target.value)}
            />
            <Styled.Button
              onClick={() => setIsDrawerOpen(true)}
              variant="primary"
              $mobile
            >
              Add
            </Styled.Button>
          </Styled.Group>
          <Styled.SelectGroup>
            <Styled.Select
              value={filters.type}
              onChange={(e) =>
                handleFilterChange(
                  "type",
                  e.target.value as PropertyType | "all"
                )
              }
            >
              <option value="all">Type: All</option>
              <option value={PropertyType.APARTMENT}>Type: Apartment</option>
              <option value={PropertyType.HOUSE}>Type: House</option>
            </Styled.Select>

            <Styled.Select
              value={filters.priceSort}
              onChange={(e) =>
                handleFilterChange("priceSort", e.target.value as SortOrder)
              }
            >
              <option value="desc">Price descending</option>
              <option value="asc">Price ascending</option>
            </Styled.Select>
          </Styled.SelectGroup>
        </Styled.FiltersContainer>

        <Styled.Button onClick={() => setIsDrawerOpen(true)} variant="primary">
          Add property
        </Styled.Button>
      </Styled.Container>

      <CreatePropertyDrawer
        isOpen={isDrawerOpen}
        onClose={() => setIsDrawerOpen(false)}
      />
    </>
  );
};

export default Toolbar;
