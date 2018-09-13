const requrest = require("request");
const server = require("../../src/server");
const base = "http://localhost:3000/";

describe("routes : static", () => {
  describe("GET /", () => {
    it("should return status code 200 and have 'Welcome to Bloccit' in the body of the response",() => {

      request.get(base, (err, res, body) => {
        expect(res.statusCode).toBe(200);
        expect(body)toContain("Welcome to Bloccit");
        done();
      });
    });
  });
});

describe("routes", () => {
  describe("GET /about", () =>{
    it("should return the view and it should have 'About Us' in the body", () => {
      request.get(base, (err, res, body) => {
        expect(body)toContain("About Us");
        done();
      });
    });
  });
});
