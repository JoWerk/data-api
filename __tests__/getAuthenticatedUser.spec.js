const { Octokit } = require("octokit");

describe("get authenticated user info", () => {
    test("user without token", async () => {
      const token = ''
      const octokit = new Octokit({ auth: token })
      try {
        const response = await octokit.rest.users.getAuthenticated();
      }
      catch (e) {
        expect(e.status).toEqual(401)
      }
    }),
    test("user without plan permissions", async () => {
      const token = 'add token with no permissions here'
      const octokit = new Octokit({ auth: token })
      const user = await octokit.rest.users.getAuthenticated();
      expect(user.data).not.toHaveProperty("plan")
    }),
    test("user with free plan permissions", async () => {
      const plan_token = 'add token with user permissions here'
      const octokit = new Octokit({ auth: plan_token })
      const user = await octokit.rest.users.getAuthenticated();
      expect(user.data).toHaveProperty("plan")
      expect(user.data.plan.name).toEqual("free")
    })
  });
