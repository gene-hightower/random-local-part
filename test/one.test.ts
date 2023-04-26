import { random_local_part } from "../lib/random-local-part";

describe("unique", () => {
  it("very unlikley to collide", () => {
    const one = random_local_part();
    expect(one).not.toEqual(random_local_part());
  });
});
