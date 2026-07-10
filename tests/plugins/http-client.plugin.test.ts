import { describe, test, expect } from "@jest/globals";
import { buildHttpClient } from "../../src/plugins/http-client.plugin.js";

describe("plugins/http-client.plugin.ts", () => {
  test("buildHttpClient.get() should return a string", async () => {
    const httpclient = buildHttpClient({});
    const data = await httpclient.get(
      "http://jsonplaceholder.typicode.com/todos/1",
    );

    expect(data).toEqual({
      userId: 1,
      id: 1,
      title: "delectus aut autem",
      completed: expect.any(Boolean),
    });

  });

  test('buildHttpClient should have POST, PUT, and DELETE methods', () => {
    const httpclient = buildHttpClient({});

    expect(typeof httpclient.post).toBe('function');
    expect(typeof httpclient.put).toBe('function');
    expect(typeof httpclient.delete).toBe('function');
  });

});
