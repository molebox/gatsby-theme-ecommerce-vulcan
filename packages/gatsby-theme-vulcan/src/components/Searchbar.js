/** @jsx jsx */
import { jsx } from "theme-ui";
import styled from "@emotion/styled";

const SearchBarContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 1em auto;
`;

const Input = styled.input`
  padding: 0.4em;
`;

const SearchBar = ({ handleSearchQuery }) => {
  return (
    <SearchBarContainer>
      <Input
        sx={{
          color: "primary",
          fontFamily: "body"
        }}
        type="text"
        id="category-searchbar"
        placeholder="Filter by category..."
        onChange={handleSearchQuery}
      />
    </SearchBarContainer>
  );
};

export default SearchBar;
