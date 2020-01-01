describe("New user registration", async function() {
    it("Register Form: Email is delievered", function() {
        const incoming_mailbox = `geris0623@gmail.com`;
        cy
            .task("gmail:check", {
                from: "geris04@outlook.com",
                to: incoming_mailbox,
                subject: "documento masivo clientes"
            })
            .then(email => {
                assert.isNotNull(email, `Email was not found`);
            });
    });
});
