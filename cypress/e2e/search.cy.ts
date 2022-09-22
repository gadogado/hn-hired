// describe("search", () => {
//   it("should filter by search term", () => {
//     cy.visit("/");

//     // selecting a single filter
//     cy.findByRole("button", { name: /^react$/ }).then((elem) => {
//       const selected = [
//         "border-gray-400",
//         "font-semibold",
//         "tracking-normal",
//         "text-gray-700",
//         "opacity-100",
//         "drop-shadow-sm",
//       ];

//       cy.wrap(elem).should("not.have.class", ...selected);
//       cy.wrap(elem).click();
//       cy.wrap(elem).should("have.class", ...selected);
//     });

//     // TODO: reset
//   });
// });
