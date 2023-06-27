var jwt = require("jsonwebtoken");

export default function createToken(
  firstBishop: string,
  privateKey: string
): string {
  let bishop = jwt.sign({ firstBishop, lastBishop: "bishop" }, privateKey, {
    algorithm: "HS256",
  });
  let knight = jwt.sign(
    { firstKnight: bishop, lastKnight: "knight" },
    privateKey + bishop,
    {
      algorithm: "HS256",
    }
  );
  let king = jwt.sign(
    { firstKing: bishop, lastKing: knight },
    privateKey + knight + bishop,
    {
      algorithm: "HS256",
    }
  );

  return king;
}
