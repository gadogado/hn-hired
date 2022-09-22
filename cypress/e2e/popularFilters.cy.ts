describe("popular filters", () => {
  it("should apply a filter when selected", () => {
    cy.visit("/");

    // selecting a single filter
    cy.findByRole("button", { name: /^react$/ }).then((elem) => {
      const selected = [
        "border-gray-400",
        "font-semibold",
        "tracking-normal",
        "text-gray-700",
        "opacity-100",
        "drop-shadow-sm",
      ];

      cy.wrap(elem).should("not.have.class", ...selected);
      cy.wrap(elem).click();
      cy.wrap(elem).should("have.class", ...selected);
    });

    // reset before and after results
    cy.findByRole("button", { name: "reset" }).then((elem) => {
      cy.findByText("151 results");
      cy.wrap(elem).click();
      cy.findByText("518 results");
      cy.wrap(elem).should("not.exist");
    });
  });
});
