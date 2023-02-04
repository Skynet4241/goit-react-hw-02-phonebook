import { FilterField, FilterInput } from './Filter.styled';

export const Filter = ({ filter, filterHandler }) => (
  <FilterField>
    <label htmlFor="filter">Find contacts by Name</label>
    <FilterInput
      type="text"
      id="filter"
      name="name"
      placeholder="Enter filter"
      onChange={filterHandler}
      value={filter}
    ></FilterInput>
  </FilterField>
);
