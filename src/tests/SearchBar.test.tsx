import { render, fireEvent } from "@testing-library/react";
import SearchBar from "../components/SearchBar";

test("SearchBar calls onSearch with the correct query", () => {
  const mockOnSearch = jest.fn();
  const { getByPlaceholderText, getByText } = render(
    <SearchBar onSearch={mockOnSearch} />
  );

  const input = getByPlaceholderText("Search movies or TV shows...");
  fireEvent.change(input, { target: { value: "Inception" } });

  fireEvent.click(getByText("Search"));

  expect(mockOnSearch).toHaveBeenCalledWith("Inception");
});